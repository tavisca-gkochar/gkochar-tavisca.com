### Diagram 2: SDKs and Sites

```markdown
# Dependency Diagram: SDKs and Sites

```mermaid
graph TD;
    %% Define subgraphs for better organization
    subgraph SDKs
        L4[📦 sdk4]
    end

    subgraph Sites
        S1[🐳 Site1]
        S2[🐳 Site2]
    end

    %% Define relationships with distinct colors
    L4 --x|used by| S1;
    L4 --x|used by| S2;

    %% Adding styles and theming
    style L4 fill:#0cf,stroke:#333,stroke-width:2px;

    style S1 fill:#b3b3b3,stroke:#333,stroke-width:2px;
    style S2 fill:#d9d9d9,stroke:#333,stroke-width:2px;

    %% Adding labels and additional styling
    classDef sdk fill:#9cf,stroke:#333,stroke-width:2px;
    classDef site fill:#b3b3b3,stroke:#333,stroke-width:2px;

    class L4 sdk;
    class S1,S2 site;
