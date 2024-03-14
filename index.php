<?php

function isDesktop()
{
    $userAgent = $_SERVER['HTTP_USER_AGENT'];

    return !preg_match('/(Mobile|Android|iPhone|iPad|Windows Phone)/i', $userAgent);
}

if (isDesktop()) {
    // Redirecionar para a página desktop
    header("Location: desktop/index.html");
    exit();
} else {
    // Redirecionar para a página mobile
    header("Location: mobile/index.html");
    exit();
}

?>