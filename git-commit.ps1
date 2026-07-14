git add .
git status


<# 
Initial commit 🎉 :tada:"
Version tag    🔖 :bookmark:"
New feature    ✨ :sparkles:"
Bugfix         🐛 :bug:" 
#>


Write-Host ""
Write-Host "Escolha o tipo do commit:"
Write-Host "1) Initial commit :tada:"
Write-Host "2) Version tag    :bookmark:"
Write-Host "3) New feature    :sparkles:"
Write-Host "4) Bugfix         :bug:"
Write-Host "5) feat"
Write-Host "6) fix"
Write-Host "7) docs"
Write-Host "8) refactor"
Write-Host "9) chore"

$opcao = Read-Host "Opção"

switch ($opcao) {
    "1" { $tipo = ":tada:" }
    "2" { $tipo = ":bookmark:" }
    "3" { $tipo = ":sparkles:" }
    "4" { $tipo = ":bug:" }
    "5" { $tipo = "feat" }
    "6" { $tipo = "fix" }
    "7" { $tipo = "docs" }
    "8" { $tipo = "refactor" }
    "9" { $tipo = "chore" }
    default { $tipo = "chore" }
}


## $mensagem = Read-Host "Mensagem"
$commitMessage = "{0}: {1}" -f $tipo, $mensagem

##git commit -m "$tipo`: $mensagem"
git commit -m $commitMessage

git push -u origin main

Write-Host ""
Write-Host "Commit enviado com sucesso!"