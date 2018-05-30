function addRowHandlers() {
  $( "table tr" ).click(function() {
    if($(this).find("td:nth-child(3) a").length){
      var rawlink = $(this).find("td:nth-child(3) a").attr("href");
      if(rawlink.match(/^http[s]?:\/\/github\.com/)) {
        // https://github.com/user/repo
        Swal('github');
      } else if(rawlink.match(/^http[s]?:\/\/gitlab\.com/)) {
        // https://gitlab.com/user/repo/
        Swal('gitlab');
      } else if(rawlink.match(/^http[s]?:\/\/bitbucket\.org/)) {
        // https://bitbucket.org/user/repo
        Swal('bitbucket');
      } else if(rawlink.match(/^http[s]?:\/\/(?:www\.)?sourceforge\.net/)) {
        // https://www.sourceforge.net/projects/project/
        Swal('sourceforge');
      }
    }
  });
}
window.onload = addRowHandlers();
