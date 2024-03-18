<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecionamento de Dispositivo</title>
    <script>
        // Função para verificar se é um dispositivo móvel
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Redirecionamento baseado no tipo de dispositivo
        if (isMobile()) {
            // Redirecionar para a página mobile
            window.location.href = "mobile/index.html";
        } else {
            // Redirecionar para a página desktop
            window.location.href = "desktop/index.html";
        }
    </script>
</head>
<body>
    <p>Redirecionando...</p>
</body>
</html>
