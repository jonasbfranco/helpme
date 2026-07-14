docker compose down

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Containers finalizados com sucesso"
} else {
    Write-Host "❌ Erro ao finalizar os containers"
}