<script>
  export let data;
  console.log("URL", data.accountURL);
  export let accountURL;
</script>


<h1>{data.slug}</h1>
<h2>{accountURL}</h2>
<h2>{data.app.username}</h2>
<h2>{data.app.password}</h2>