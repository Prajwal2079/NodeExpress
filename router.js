

module.exports = (app) =>{
        app.route('/')
        .get((req,resp)=>resp.send("<h1>At base page"));

        app.route("/login")
        .get((req,resp)=>resp.send("<h1>At login page"));

        app.route("/add")
        .get((req,resp)=>resp.send("<h1>At add page</h1>"));

}