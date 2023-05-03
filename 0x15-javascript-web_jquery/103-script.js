 $(document).ready(function() {
        $("#btn_translate").click(function() {
          var langCode = $("#language_code").val();
          var url = "https://www.fourtonfish.com/hellosalut/hello/" + langCode;
          $.get(url, function(response) {
            $("#hello").text(response.hello);
