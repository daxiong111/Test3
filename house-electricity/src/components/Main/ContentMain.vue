<template>
    <main>
        <div class="matter">
            <div class="container">
                <content-left></content-left>
                <content-second></content-second>
                <content-third></content-third>
                <content-four></content-four>
            </div>
        </div>
    </main>
</template>

<script>
    import ContentLeft from './ContentLeft'
    import ContentSecond from './ContentSecond'
    import ContentThird from './ContentThird'
    import ContentFour from './ContentFour'

    export default {
        name: 'ContentMain',
        components: {
            ContentLeft,ContentSecond,ContentThird,ContentFour
        }
    }
</script>

<style>
    /*内容区**************************************************************************************************************************************************************************************************************************/
    main{ width:100%; /* height:100%; min-height:100%; */position:absolute;  left:0px;}
    .matter{ width:100%; padding:2px 0;}
    .container{ overflow:hidden; max-width:100%!important; padding-right:3px; padding-left:3px; margin-right:auto; margin-left:auto;}

</style>