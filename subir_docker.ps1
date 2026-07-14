docker compose up -d

if ($LASTEXITCODE -eq 0) {
    Write-Host "Docker sendo executado"
} else {
    Write-Host "Erro ao executar docker"
}