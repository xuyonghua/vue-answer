import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const ADD_ITEM = 'ADD_ITEM'
const ADD_ANSWER = 'ADD_ANSWER'
const CHANGE_PAGE = 'CHANGE_PAGE'

export default new Vuex.Store({
    state: {
        level: '第一周', //活动周数
        page: 'home',
        itemNum: 0, // 第几题
        allTime: 0,  //总共用时
        timer: '', //定时器
        itemDetail: [{
            "topic_id": 20,
            "active_topic_id": 4,
            "type": "ONE",
            "topic_name": "题目一",
            "active_id": 1,
            "active_title": "欢乐星期五标题",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 1,
                "topic_id": 20,
                "answer_name": "答案aaaa",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 2,
                "topic_id": 20,
                "answer_name": "正确答案",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 3,
                "topic_id": 20,
                "answer_name": "答案cccc",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 4,
                "topic_id": 20,
                "answer_name": "答案dddd",
                "is_standard_answer": 1
            }]
        }, {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目二",
            "active_id": 1,
            "active_title": "欢乐星期五标题",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 5,
                "topic_id": 21,
                "answer_name": "答案A",
                "is_standard_answer": 1
            }, {
                "topic_answer_id": 6,
                "topic_id": 21,
                "answer_name": "答案B",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 7,
                "topic_id": 21,
                "answer_name": "正确答案",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 8,
                "topic_id": 21,
                "answer_name": "答案D",
                "is_standard_answer": 0
            }]
        }, {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目三",
            "active_id": 1,
            "active_title": "欢乐星期五标题",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 9,
                "topic_id": 21,
                "answer_name": "测试A",
                "is_standard_answer": 1
            }, {
                "topic_answer_id": 10,
                "topic_id": 21,
                "answer_name": "BBBBBB",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 11,
                "topic_id": 21,
                "answer_name": "CCCCCC",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 12,
                "topic_id": 21,
                "answer_name": "正确答案",
                "is_standard_answer": 0
            }]
        }, {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目四",
            "active_id": 1,
            "active_title": "欢乐星期五标题",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 13,
                "topic_id": 21,
                "answer_name": "正确答案",
                "is_standard_answer": 1
            }, {
                "topic_answer_id": 14,
                "topic_id": 21,
                "answer_name": "A是错的",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 15,
                "topic_id": 21,
                "answer_name": "D是对的",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 16,
                "topic_id": 21,
                "answer_name": "C说的不对",
                "is_standard_answer": 0
            }]
        }, {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目五",
            "active_id": 1,
            "active_title": "欢乐星期五标题",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 17,
                "topic_id": 21,
                "answer_name": "错误答案",
                "is_standard_answer": 1
            }, {
                "topic_answer_id": 18,
                "topic_id": 21,
                "answer_name": "正确答案",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 19,
                "topic_id": 21,
                "answer_name": "错误答案",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 20,
                "topic_id": 21,
                "answer_name": "错误答案",
                "is_standard_answer": 0
            }]
        }],
        answerIds: [], //答案id
    },
    mutations: {
        [ADD_ITEM](state, num) {
            state.itemNum += num
        },
        [ADD_ANSWER](state, id) {
            state.answerIds.push(id)
        },
        [CHANGE_PAGE](state, page) {
            state.page = page
        }
    },
    actions: {
        addNum({commit, state}, id) {
            if (id != -1) {
                commit(ADD_ANSWER, id);
            }

            if (state.itemNum < state.itemDetail.length) {
                commit(ADD_ITEM, 1)
            }
        },
        change({commit, state}, page) {
            commit(CHANGE_PAGE, page)
        }
    }
});
