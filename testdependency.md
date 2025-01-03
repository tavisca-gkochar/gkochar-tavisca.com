# Dependency Diagrams

## Diagram 1: Components and Apps

```mermaid
graph TD;
    %% Define subgraph Components
    subgraph Components
        C1[🔧 Component1]
        C2[🔧 Component2]
        C3[🔧 Component3]
        C4[🔧 Component4]
        C5[🔧 Component5]
    end

    subgraph Apps
        A1[📱 App1]
        A2[📱 App2]
        A3[📱 App3]
        A4[📱 App4]
        A5[📱 App5]
    end

    %% Define relationships
    C1 -->|uses| A1;
    C1 -->|uses| A2;
    C1 -->|uses| A3;
    C1 -->|uses| A4;
    C1 -->|uses| A5;
    C2 -->|uses| A2;
    C2 -->|uses| A3;
    C3 -->|uses| A1;
    C3 -->|uses| A4;
    C3 -->|uses| A5;
    C4 -->|uses| A2;
    C4 -->|uses| A3;
    C5 -->|uses| A4;
    C5 -->|uses| A5;

    %% Adding styles and theming
    style C1 fill:#f96,stroke:#333,stroke-width:2px;
    style C2 fill:#f6b,stroke:#333,stroke-width:2px;
    style C3 fill:#f9c,stroke:#333,stroke-width:2px;
    style C4 fill:#f39,stroke:#333,stroke-width:2px;
    style C5 fill:#f63,stroke:#333,stroke-width:2px;

    style A1 fill:#b3cde3,stroke:#333,stroke-width:2px;
    style A2 fill:#ccebc5,stroke:#333,stroke-width:2px;
    style A3 fill:#decbe4,stroke:#333,stroke-width:2px;
    style A4 fill:#fed9a6,stroke:#333,stroke-width:2px;
    style A5 fill:#ffffcc,stroke:#333,stroke-width:2px;
