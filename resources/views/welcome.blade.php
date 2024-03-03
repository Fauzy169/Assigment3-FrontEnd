<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite('resources/js/app.js')
    <style>
        .bg-Dark {
            background-color: rgba(15, 15, 15, .98);
        }
    </style>
</head>

<body id="app" class="bg-Dark">
    <!-- <App /> -->
    <router-view></router-view>
</body>

</html>