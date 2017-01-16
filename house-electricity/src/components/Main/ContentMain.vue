<template>
    <main>
        <div class="matter">
            <div class="container">
                <content-left></content-left>
            </div>
        </div>
    </main>
</template>

<script>
    import ContentLeft from './ContentLeft'

    export default {
        name: 'ContentMain',
        components: {
            ContentLeft
        }
    }
</script>

<style>
    /*内容区**************************************************************************************************************************************************************************************************************************/
    main{ width:100%; /* height:100%; min-height:100%; */position:absolute;  left:0px;}
    .matter{ width:100%; padding:2px 0;}
    .container{ overflow:hidden; max-width:100%!important; padding-right:3px; padding-left:3px; margin-right:auto; margin-left:auto;}

</style>