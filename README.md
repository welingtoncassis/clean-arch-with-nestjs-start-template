# What is clean architecture?

- Clean architecture is a software architecture that applies the concept of clean code and SOLID principles in building scalable, testable, and maintainable applications.

## Clean architecture is divided into 4 layers, namely:

- Entities (Enterprise Business Rules)
- Use Cases (Application Business Rules)
- Interface adapters
- Frameworks and drivers

- The inner layer cannot know anything about the outer layer and does not depend on the outer layer. Instead, the outer layer depends on the inner layer.

# Project Structure

- Applications: This is the applications business layer, in this folder it will contain the existing business flows of the application in the form of use cases.
- Domains: Represents the enterprise business layer in the form of models and abstractions from the repository.
- Infrastructures: Contains frameworks and external tools, such as database, repository configuration and implementation.
- Presentations: Adapter that connects the use case with the external layer.

# Use cases proxy

- Use cases proxy will connect the use cases with the infrastructure to presentation layer uses.

# The benefits of a clean architecture are:

Independent of Framework.
Testable.
Independent of UI.
Independent of Databases.
Independent of External.
