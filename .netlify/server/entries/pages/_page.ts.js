async function load() {
  const data = await fetch("https://bcm.home.aureleoules.com/mutations");
  const mutations = await data.json();
  console.log(mutations);
  return {
    mutations
  };
}
export {
  load
};
