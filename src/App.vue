<template>
    <router-view />
</template>
<style lang="scss">
    html, body {
        width: 100%;
        height: 100%;
        font-family: "SourceHanSansCn Normal";
    }
    #bookTicket .leibie,#bookCard .leibie, #gym .leibie{position: relative;line-height:36px}
    // #bookTicket .leibie2,#bookCard .leibie2,#BookField .leibie2,#gym .leibie2,{position: relative;left:-20px}
    #bookTicket .ivu-radio-wrapper,#bookCard .ivu-radio-wrapper, #BookField .ivu-radio-wrapper, #mall .ivu-radio-wrapper, #gym .ivu-radio-wrapper{
        font-size: 14px;
        line-height: 28px;
        height: 28px;
        border-radius: 15px;
        margin: 5px 0;
        padding: 0 13px 0 15px;
        color: #333;
        border:none;
        letter-spacing:2px;
        }
        #bookTicket .ivu-radio-group-button .ivu-radio-wrapper:after, .ivu-radio-group-button .ivu-radio-wrapper:before,#bookCard .ivu-radio-group-button .ivu-radio-wrapper:after, .ivu-radio-group-button .ivu-radio-wrapper:before,#BookField .ivu-radio-group-button .ivu-radio-wrapper:after, .ivu-radio-group-button .ivu-radio-wrapper:before,#mall .ivu-radio-group-button .ivu-radio-wrapper:after, .ivu-radio-group-button .ivu-radio-wrapper:before,#gym .ivu-radio-group-button .ivu-radio-wrapper:after, .ivu-radio-group-button .ivu-radio-wrapper:before{width: 0;}
    #bookTicket .ivu-radio-wrapper:first-child,#bookCard .ivu-radio-wrapper:first-child, #BookField .ivu-radio-wrapper:first-child, #gym .ivu-radio-wrapper:first-child{
        border-radius: 15px;
        }
    #bookTicket .ivu-radio-wrapper:last-child,#bookCard .ivu-radio-wrapper:last-child {
        border-radius: 15px;
    }
    #bookTicket .ivu-radio-group-button .ivu-radio-wrapper-checked,#bookCard .ivu-radio-group-button .ivu-radio-wrapper-checked,#BookField .ivu-radio-group-button .ivu-radio-wrapper-checked,#mall .ivu-radio-group-button .ivu-radio-wrapper-checked,#gym .ivu-radio-group-button .ivu-radio-wrapper-checked{
      padding: 0 13px 0 15px;color:#fff;box-shadow:none;background:rgba(0,161,233,1);
    }
    #gymDetails .ivu-tabs-bar .ivu-tabs-nav-container{
        height: 45px;
    }
    #gymDetails .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        height: 35px;
        font-size: 18px;
        line-height: 26px;
        border-radius: 10px 10px 0 0;position: relative;
        }
        #gymDetails .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        padding-left:35px;
        padding-right: 35px;
        margin-right: 10px;
        position: relative;
        bottom: -5px;
        }
        #gymDetails .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        background: #00a1e9;
        color: #fff;
        height: 45px;
        bottom: 0;
        line-height: 36px
        }
        #gymDetails .ivu-tabs-bar{background:#f7f7f7;border-bottom: 1px solid #f2f6f8;}
</style>
