try {
    Get-ChildItem -Path . -Recurse -Force -Filter "._*" |
        Remove-Item -Force

    Write-Host "✅ Arquivos removidos"
}
catch {
    Write-Host "❌ Erro ao remover arquivos"
    Write-Host $_.Exception.Message
}
