# Dependency Diagram

```mermaid
graph TD;
    subgraph Components
        A[ComponentA]
        D[ComponentB]
    end

    subgraph SDKs
        F[SDK1]
        G[SDK2]
    end

    subgraph Apps
        B[App1]
        E[App2]
        C[App3]
    end

    A -->|uses| B;
    A -->|uses| C;
    D -->|uses| E;
    F -->|used by| B;
    G -->|used by| E;
    G -->|used by| C;

    %% Adding styles
    style A fill:#f96,stroke:#333,stroke-width:2px;
    style G fill:#f96,stroke:#333,stroke-width:2px;
    style B fill:#b3cde3,stroke:#333,stroke-width:2px;
    style E fill:#b3cde3,stroke:#333,stroke-width:2px;
    style C fill:#b3cde3,stroke:#333,stroke-width:2px;

    %% Adding labels and additional styling
    classDef component fill:#f9f,stroke:#333,stroke-width:2px;
    classDef sdk fill:#9cf,stroke:#333,stroke-width:2px;
    classDef app fill:#b3cde3,stroke:#333,stroke-width:2px;

    class A,D component;
    class F,G sdk;
    class B,E,C app;
