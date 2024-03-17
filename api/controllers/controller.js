import path from "path";

class PageController {
  static getHomePage(req, res) {
    res.sendFile(path.resolve() + `/public/html/index.html`);
  }

  static getSimplePage(req, res) {
    res.sendFile(path.resolve() + `/public/html/page_two.html`);
  }

   static getPPL(req,res) {
      res.render(path.resolve() + '/views/ppl.ejs');
  }

   static getUL(req, res) {
      res.render(path.resolve() + `/views/ul.ejs`);
 }    

}

export default PageController;

