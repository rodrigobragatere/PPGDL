# PPGDL — Desenvolvimento Local

Site institucional do **Programa de Pós-Graduação Stricto Sensu em Desenvolvimento Local** da [UNISUAM](https://www.unisuam.edu.br/). Apresenta o programa, cursos, linhas de pesquisa e os projetos desenvolvidos nas disciplinas de Mestrado e Doutorado.

**Acesso online:** [ppgdl.vercel.app](https://ppgdl.vercel.app/)

## Sobre o programa

O PPGDL forma profissionais capazes de identificar condições latentes e gerar conhecimentos e produtos técnicos/tecnológicos para a melhoria das condições de vida, com foco em sustentabilidade e inclusão social. O programa possui **avaliação 5 estrelas pela CAPES** e oferece Mestrado, Doutorado e Pós-Doutorado.

**Área de concentração:** Trabalho e Sustentabilidade

**Linhas de pesquisa:**
- Sociedade e Ambiente
- Cadeias Produtivas Sustentáveis
- Inovação e Empreendedorismo

## Funcionalidades do site

- Página única com navegação por seções (Início, Sobre, Cursos, Pesquisa, Projetos, Contato)
- Layout responsivo com Bootstrap 5
- Filtro de projetos por disciplina
- Animações de entrada ao rolar a página
- Identidade visual alinhada à UNISUAM (verde, laranja e azul-marinho)

## Projetos das disciplinas

| Disciplina | Projeto | URL |
|---|---|---|
| Tópicos em Desenvolvimento Local | Modelo de Avaliação de Desempenho de APLs | [apl-wheat.vercel.app](https://apl-wheat.vercel.app/) |
| Bioética | SASAT | [sasat.vercel.app](https://sasat.vercel.app/) |
| Governança Corporativa Ambiental | Emissões de CO₂ no Brasil por Região | [governanca-corporativae-ambiental.vercel.app](https://governanca-corporativae-ambiental.vercel.app/) |
| Tecnologias Sociais | Programa Futuro Cientista (PFC) | [jovem-cientista.vercel.app](https://jovem-cientista.vercel.app/) |
| Tecnologias Sociais | Análise de Argilas para Cerâmica Artesanal | [dashboard-argila.vercel.app](https://dashboard-argila.vercel.app/) |
| Empreendedorismo & PN | Protótipo PESTEL — Dashboard | [rodrigobragatere-pestel.vercel.app](https://rodrigobragatere-pestel.vercel.app/) |
| Gestão da Inovação | Observatório CT&I Brasil | [ct-i.vercel.app](https://ct-i.vercel.app/) |

## Tecnologias

- HTML5
- CSS3 (variáveis customizadas, gradientes, animações)
- JavaScript (vanilla)
- [Bootstrap 5.3](https://getbootstrap.com/) (via CDN)
- Deploy na [Vercel](https://vercel.com/)

## Estrutura do projeto

```
PPGDL/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos e identidade visual
├── js/
│   └── main.js         # Filtros, navegação ativa e animações
├── img/
│   └── brand/          # Logos PPGDL e UNISUAM
├── vercel.json         # Configuração de deploy e headers
└── package.json
```

## Como executar localmente

Não há dependências para instalar. Basta abrir o `index.html` no navegador ou servir com um servidor local:

```bash
# Com Python
python -m http.server 8080

# Com Node.js (npx)
npx serve .
```

Acesse `http://localhost:8080` no navegador.

## Como adicionar um novo projeto

1. Em `index.html`, adicione um botão de filtro na `.filter-bar` (se for uma disciplina nova):

```html
<button class="filter-btn" data-filter="slug-disciplina">Nome da Disciplina</button>
```

2. Adicione o card na `#projectsGrid`, seguindo o padrão existente:

```html
<div class="col-md-6 col-lg-4 project-card-col fade-in" data-discipline="slug-disciplina">
  <article class="project-card">
    <div class="project-card-header slug-disciplina">
      <div class="project-discipline">Nome da Disciplina</div>
      <h3>Título do Projeto</h3>
    </div>
    <div class="project-card-body">
      <p>Descrição do projeto.</p>
      <div class="project-tags">
        <span class="project-tag">Tag</span>
      </div>
      <a href="https://url-do-projeto.vercel.app/" class="btn-project" target="_blank" rel="noopener">
        Acessar projeto ↗
      </a>
    </div>
  </article>
</div>
```

3. Se necessário, crie a cor do cabeçalho em `css/styles.css`:

```css
.project-card-header.slug-disciplina {
  background: linear-gradient(135deg, #cor1, #cor2);
}
```

O filtro funciona automaticamente via `data-filter` / `data-discipline` — não é preciso alterar o JavaScript.

## Deploy

O projeto está configurado para deploy na Vercel. Ao conectar o repositório, o deploy é feito automaticamente a cada push na branch principal.

## Contato

- **E-mail:** matriculastrictosensu@unisuam.edu.br
- **Endereço:** Av. Paris, nº 84 — Bonsucesso — Rio de Janeiro/RJ
- **Site oficial:** [hs.unisuam.edu.br/ppgdl-desenvolvimento-local](https://hs.unisuam.edu.br/ppgdl-desenvolvimento-local)

## Licença

© 2026 [@RodrigoBraga](https://rodrigobragatere.com) · Todos os direitos reservados.
