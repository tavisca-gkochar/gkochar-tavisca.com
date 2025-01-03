# Simplified Dependency Diagram with Improved Layout

```mermaid
graph TD;
    %% Define subgraphs for better organization
    subgraph SDKs
        L1[📦 sdk1]
        L2[📦 sdk2]
        L3[📦 sdk3]
        L4[📦 sdk4]
    end

    subgraph "Apps and Sites"
        A1[📱 App1]
        A2[📱 App2]
        A3[📱 App3]
        A4[📱 App4]
        A5[📱 App5]
        S1[🐳 Site1]
        S2[🐳 Site2]
    end

    subgraph Components
        C1[🔧 Component1]
        C2[🔧 Component2]
        C3[🔧 Component3]
        C4[🔧 Component4]
        C5[🔧 Component5]
    end

    %% Define relationships with distinct colors and labels
    C1 -.->|uses App1| A1;
    C1 -.->|uses App2| A2;
    C1 -.->|uses App3| A3;
    C1 -.->|uses App4| A4;
    C1 -.->|uses App5| A5;
    C2 -.->|uses App2| A2;
    C2 -.->|uses App3| A3;
    C3 -.->|uses App1| A1;
    C3 -.->|uses App4| A4;
    C3 -.->|uses App5| A5;
    C4 -.->|uses App2| A2;
    C4 -.->|uses App3| A3;
    C5 -.->|uses App4| A4;
    C5 -.->|uses App5| A5;

    L1 --x|used by App1| A1;
    L1 --x|used by App2| A2;
    L1 --x|used by App3| A3;
    L1 --x|used by App4| A4;
    L2 --x|used by App1| A1;
    L2 --x|used by App2| A2;
    L2 --x|used by App3| A3;
    L2 --x|used by App4| A4;
    L3 --x|used by App5| A5;
    L4 --x|used by Site1| S1;
    L4 --x|used by Site2| S2;

    %% Adding styles and theming
    style C1 fill:#f96,stroke:#333,stroke-width:2px;
    style C2 fill:#f6b,stroke:#333,stroke-width:2px;
    style C3 fill:#f9c,stroke:#333,stroke-width:2px;
    style C4 fill:#f39,stroke:#333,stroke-width:2px;
    style C5 fill:#f63,stroke:#333,stroke-width:2px;

    style L1 fill:#9cf,stroke:#333,stroke-width:2px;
    style L2 fill:#6cf,stroke:#333,stroke-width:2px;
    style L3 fill:#3cf,stroke:#333,stroke-width:2px;
    style L4 fill:#0cf,stroke:#333,stroke-width:2px;

    style A1 fill:#b3cde3,stroke:#333,stroke-width:2px;
    style A2 fill:#ccebc5,stroke:#333,stroke-width:2px;
    style A3 fill:#decbe4,stroke:#333,stroke-width:2px;
    style A4 fill:#fed9a6,stroke:#333,stroke-width:2px;
    style A5 fill:#ffffcc,stroke:#333,stroke-width:2px;
    style S1 fill:#b3b3b3,stroke:#333,stroke-width:2px;
    style S2 fill:#d9d9d9,stroke:#333,stroke-width:2px;

    %% Adding labels and additional styling
    classDef component fill:#f9f,stroke:#333,stroke-width:2px;
    classDef sdk fill:#9cf,stroke:#333,stroke-width:2px;
    classDef app fill:#b3cde3,stroke:#333,stroke-width:2px;
    classDef site fill:#b3b3b3,stroke:#333,stroke-width:2px;

    class C1,C2,C3,C4,C5 component;
    class L1,L2,L3,L4 sdk;
    class A1,A2,A3,A4,A5 app;
    class S1,S2 site;

    %% Legend
    subgraph Legend
        direction LR
        Component[Component] -.-> App[App]
        SDK[SDK] --x App[App] & Site[Site]
    end
