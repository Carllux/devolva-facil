<?php
// proxy-frete.php
// Permissões de CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json');

// Responde a requisições de preflight do CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Só aceita POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido. Use POST.']);
    exit();
}

// Recebe os dados do front-end
$input = file_get_contents('php://input');
if (empty($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Dados não enviados.']);
    exit();
}

// Log para depuração (opcional)
error_log("Proxy PHP: Dados recebidos - " . $input);

// URL da API externa
$apiUrl = 'https://api-painel.orangeenvios.com.br/api/CalculadoraInstitucional/FretesDisponiveis';

// Configuração do cURL
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Accept: application/json',
    'Origin: https://www.orangeenvios.com.br',
    'Referer: https://www.orangeenvios.com.br/'
]);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

// Executa a requisição
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// Log da resposta para depuração
error_log("Proxy PHP: Resposta da API - HTTP Code: $httpCode, Response: $response");
if ($curlError) {
    error_log("Proxy PHP: Erro cURL - $curlError");
}

// Verifica por erros
if ($curlError) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro de conexão com a API: ' . $curlError]);
    exit();
}

// Retorna a resposta para o front-end
http_response_code($httpCode);
echo $response;
?>