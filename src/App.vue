<template>
    <router-view />
</template>
<style lang="scss">
    html, body {
        width: 100%;
        height: 100%;
    }
    #bookTicket .leibie{position: relative;left:-23px;line-height:52px}
    #bookTicket .leibie2{position: relative;left:-46px}
    #bookTicket .ivu-radio-wrapper,#bookCard .ivu-radio-wrapper{
        font-size: 18px;
        line-height: 36px;
        height: 36px;
        margin: 10px 5px;
        background: #ccecfb;
        border-radius: 18px;
        padding: 0 30px;
        color: #00a1e9;
        border:none;
        }
        #bookTicket .ivu-radio-group-button .ivu-radio-wrapper:after, .ivu-radio-group-button .ivu-radio-wrapper:before,#bookCard .ivu-radio-group-button .ivu-radio-wrapper:after, .ivu-radio-group-button .ivu-radio-wrapper:before{width: 0;}
    #bookTicket .ivu-radio-wrapper:first-child,#bookCard .ivu-radio-wrapper:first-child{
        border-radius: 18px;
        }
    #bookTicket .ivu-radio-wrapper:last-child,#bookCard .ivu-radio-wrapper:last-child {
        border-radius: 18px;
    }
    #bookTicket .ivu-radio-group-button .ivu-radio-wrapper-checked{
        background: #00a1e9; border-radius: 18px;padding: 0 30px;color: #fff
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
        #gymDetails .ivu-tabs-bar{background:#f2f6f8;border-bottom: 1px solid #f2f6f8;}
</style>
