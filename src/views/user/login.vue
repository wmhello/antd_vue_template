<template>
  <div id="warp">
      <header>
        <h2>Ant Design</h2>
        <p>Ant Design 是西湖区最具影响力的 Web 设计规范</p>
      </header>
      <div id="container">
         test!!!
      </div>
      <footer>
         <p>Copyright © 2018 版权所有 谢谢使用</p>
      </footer>

  </div>
</template>

<script>
export default {

}
</script>

<style>

#warp{
   background-color: rgb(240,242,245);
   height: 100vh;
   /* min-height: 800px; */
   display:flex;
   /* justify-content: center; */
   flex-direction: column;
   align-items:flex-start;
}

#warp header{
    height: 20%;
    align-self:center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

#warp #container{
    height: 75%;
    align-self:center;

}
#warp footer{
    height: 5%;
    align-self:center;
}

</style>