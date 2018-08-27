<template>
    <div class="container">
        <div class="top-tips">
            <span class="num-tip" v-if="page=='home'">{{level}}</span>
            <span class="num-tip" v-else>题目{{itemNum}}</span>
        </div>

        <div class="home-logo" v-if="page=='home'"></div>
        <div class="question-item"  v-if="page=='question'">
            <div class="options">
                <header class="item-title">{{itemDetail[itemNum-1].topic_name}}</header>
                <div v-for="(item, index) in itemDetail[itemNum-1].topic_answer"
                     @click="select(index, item.topic_answer_id)" class="item-option" :key="item.index" flex-row>
                    <div class="option-check" flex-center v-bind:class="{'selected':choosedNum==index}">
                        {{optionType(index)}}
                    </div>
                    <div class="option-detail">{{item.answer_name}}</div>
                </div>
            </div>

        </div>

        <div>
            <span class="start button-style" v-if="page=='home'" @click="start"></span>
            <span class="next button-style" v-if="itemNum>0" @click="next"></span>
            <span class="submit button-style" v-if="itemNum==itemDetail.length" @click="submit"></span>
        </div>
    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "QuestionItem",
        data() {
            return {
                choosedNum: null,
                answerId: 0
            }
        },
        computed: mapState([
            'itemNum', //第几题
            'level', //第几周
            'itemDetail', //题目详情
            'page'
        ]),
        methods: {
            ...mapActions([
                'addNum', 'change'
            ]),
            optionType: (index) => {
                switch (index) {
                    case 0:
                        return 'A';
                    case 1:
                        return 'B';
                    case 2:
                        return 'C';
                    case 3:
                        return 'D';
                }
            },
            start() {
                this.addNum(-1);
                this.change('question')
            },
            next() {
                if (this.choosedNum != null) {
                    this.choosedNum = null
                    this.addNum(this.answerId)
                } else {
                    alert('您还没有选择答案哦')
                }

            },
            submit() {
                if (this.choosedNum != null) {
                    this.choosedNum = null
                    this.addNum(this.answerId);
                    this.$router.push('Score')
                } else {
                    alert('您还没有选择答案哦')
                }
            },
            select(index, answerId) {
                this.choosedNum = index;
                this.answerId = answerId;
            }
        }
    };
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background-image: url(../assets/images/1-1.jpg);
        background-size: 100% 100%;
    }

    .top-tips {
        position: absolute;
        height: 300px;
        width: 200px;
        top: 0;
        right: 40px;
        background: url(../assets/images/WechatIMG2.png) no-repeat;
        z-index: 10;
        background-size: 100% 100%;
        display: flex;
        align-items: flex-end;
    }

    .num-tip {
        height: 40px;
        width: 200px;
        font-size: 30px;
        font-family: '黑体';
        font-weight: 600;
        color: #a57c50;
        text-align: center;
        margin-bottom: 30px;
    }

    .home-logo {
        width: 600px;
        height: 540px;
        background-image: url(../assets/images/1-2.png);
        background-size: 100% 100%;
        margin-top: 200px;
        margin-left: 80px;
    }

    .start {
        background-image: url(../assets/images/1-4.png);
    }

    .next {
        background-image: url(../assets/images/2-2.png);
    }

    .submit {
        background-image: url(../assets/images/3-1.png);
    }

    .button-style {
        display: block;
        height: 100px;
        width: 200px;
        background-size: 100% 100%;
        position: absolute;
        top: 800px;
        left: 50%;
        margin-left: -100px;
        background-repeat: no-repeat;
    }

    .question-item {
        width: 600px;
        height: 540px;
        margin-top: 200px;
        margin-left: 80px;
        background-image: url(../assets/images/2-1.png);
        background-size: 100% 100%;
    }

    .options{
        margin-left: 100px;
        margin-top: 100px;
    }

    .item-title {
        height: 44px;
        width: 360px;
        color: #fff;
        text-align: left;
        font-size: 30px;
    }

    .item-option {
        height: 40px;
        width: 360px;
        color: #fff;
        align-items: center;
        margin-top: 20px;
        font-size: 28px;
    }

    .option-check {
        height: 40px;
        width: 40px;
        border: 1px solid #fff;
        border-radius: 50%;
        margin-right: 10px;
        text-align: center;
    }

    .selected {
        background-color: #ffd400;
        color: #575757;
        border-color: #ffd400;
    }

    .option-detail {

    }

</style>
