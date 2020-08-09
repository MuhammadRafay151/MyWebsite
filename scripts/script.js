$(document).ready(function () {
    $.ajax({
        url: "https://api.github.com/users/MuhammadRafay151/repos",
        type: "get",
        dataType: "json",
        success: function (response) {
            for (var i = 0; i < response.length; i++) {
                Add(response[i]);
            }
        },
        error: function (response) {
            console.log(response);
        }

    })
});
function Add(data) {


    // Create the variable with the HTML markup
    var myTemplate = ` <div class="row justify-content-center">
            <div class="card col-12 col-sm-12 col-md-8 col-lg-6">
                <div class="card-body">
                    <h3 class="card-title">
                        ${data.name}
                    </h3>
                    <p>
                        Language: ${data.language}
                    </p>
                    <p>
                        Github: <a target="_blank" href="${data.html_url}">Visit Repository</a>.
                    </p>
                </div>
            </div>
        </div>`
        $('#c2').append(myTemplate);
}