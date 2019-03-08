let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  })
  async function f() {
    let result = await promise // wait till the Promise resolves
    alert(result) // "done!"
  }