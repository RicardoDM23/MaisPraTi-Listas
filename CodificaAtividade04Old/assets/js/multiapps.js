$(document).ready(function () {
    $("#link-login").click(function (event) {
        event.preventDefault()
        $("#content").load("login.html")
    })

    $("#link-registro").click(function (event) {
        event.preventDefault()
        $("#content").load("registro.html")
    })

    $("#link-todo").click(function (event) {
        event.preventDefault()
        $("#content").load("todo.html")
    })
})