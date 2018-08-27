<template>
    <div class="container">
        <div class="score-container">
            <div class="score">{{score}}分！</div>
            <div class="score-tips">{{scoreTips}}</div>
        </div>
        <div class="share-button" @click="showCover"></div>
        <div class="share-code">
            <header class="share-header">关注葡萄之家，获取答案。</header>
            <img src="../assets/images/4-4.png" class="share-image">
        </div>

        <div class="share-cover" v-show="isShow" @click="showCover">
            <img src="../assets/images/5-2.png">
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Score",
        data() {
            return {
                isShow: false,
                score: 0,
                scoreTips: '', //分数提示
                rightAnswer: [2, 7, 12, 13, 18], //正确答案
                scoreTipsArr: ['你说，是不是把知识都还给小学老师了？', '还不错，但还需要继续加油哦！', '不要嘚瑟还有进步的空间！', '智商离爆表只差一步了！', '你也太聪明啦，葡萄之家欢迎你！']
            }
        },
        computed: mapState(['answerIds']),
        methods: {
            showCover() {
                this.isShow = !this.isShow;
            },
            computedScore() {
                this.answerIds.forEach((value, index) => {
                    if (value === this.rightAnswer[index]) {
                        this.score += 20;
                    }
                })
            },
            getScoreTip() {
                let index = Math.ceil(this.score / 20) - 1;
                this.scoreTips = this.scoreTipsArr[index];
            }
        },
        created() {
            console.log('answerIds', this.answerIds)
            this.computedScore();
            this.getScoreTip();
        }
    }
</script>

<style scoped>
    .container {
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/images/4-1.jpg");
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .score-container {
        position: relative;
        width: 55vw;
        height: 450px;
        margin-top: 60px;
        background-image: url("../assets/images/4-2.png");
        background-size: 100% 100%;
    }

    .score {
        width: 100%;
        position: absolute;
        text-indent: 30px;
        top: 260px;
        left: 10px;
        font-size: 50px;
        font-weight: 900;
        -webkit-text-stroke: 2px #412318;
        font-family: Tahoma, Helvetica, Arial;
        color: #a51d31;
    }

    .score-tips {
        width: 100%;
        position: absolute;
        top: 330px;
        left: 20px;
        margin-right: 10px;
    }

    .share-button {
        width: 280px;
        height: 120px;
        margin-top: 40px;
        background: url(../assets/images/4-3.png) no-repeat 0.4rem 0;
        background-size: 260px 100%;
    }

    .share-code {
        width: 360px;
        margin-top: 40px;
    }

    .share-header {
        color: #664718;
        font-size: 26px;
        font-family: 'Microsoft YaHei';
        font-weight: 500;
    }

    .share-image {
        width: 230px;
        height: 230px;
        margin-top: 40px;
    }

    .share-cover {
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.8;
    }

    .share-cover img {
        height: 500px;
        width: 550px;
        position: fixed;
        top: 40px;
        left: 100px;
    }
</style>
