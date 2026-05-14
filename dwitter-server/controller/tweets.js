import * as repository from '../repository/tweets.js';

//mytweets select all
export const getAll = async (req, res) => {
  try {
    const rows = await repository.getAll();
    res.json(rows);
  } catch (err) {
    console.error('[GET /tweets]', err);
    res.status(500).json({ message: '서버 오류' });
  }
}

//mytweet create
export const createMyTweet = async (req, res) => {
    const { content } = req.body;
    // console.log('create:::', content, req.user.id);

    try {
        const result = await repository.create(content, req.user.id);
        if (result.affectedRows) {
            const sResult = await repository.getTweet(result.insertId);          
            res.status(201).json({ "result": result.affectedRows, "sResult": sResult});
        }

    } catch (err) {
        console.error('[POST /tweets]', err);
        res.status(500).json({ message: '서버 오류' });
    }
}

//mytweet delete
export const getMyTweetsDelete = async (req, res) => {
    const { id } = req.params;
    //console.log(id, req.user.id);

    try {
        const rows = await repository.getDelete(id, req.user.id);
        if (rows) res.json({ message: '삭제되었습니다.' });
    } catch (err) {
        console.error('[DELETE /tweets/:id]', err);
        res.status(500).json({ message: '서버 오류' });
    }
}

//mytweet update
export const getMyTweetsUpdate = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    console.log(id, content, req.user.id);

    // 💥 유효성 체크는 프론트에서 진행하기!!
    // if (!content?.trim()) {
    //     return res.status(400).json({ message: '내용을 입력하세요.' });
    // }

    try {
        const rows = await repository.getUpdate(id, content.trim(), req.user.id);
        if (rows) res.json({ message: '수정되었습니다.' });
    } catch (err) {
        console.error('[PUT /tweets/:id]', err);
        res.status(500).json({ message: '서버 오류' });
    }
}

/**
 *  mytweets select
 */
export const getMyTweets = async (req, res) => {
    try {
        const rows = await repository.getMyTweets(req.user.id);
        console.log('rows:::', rows);     
        res.json(rows);      
    } catch (err) {
        console.error('[GET /tweets/my]', err);
        res.status(500).json({ message: '서버 오류' });
    }
}