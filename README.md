# spd

## Getting Started

A new generation of flexible and scalable medical supply chain system solutions

## Available Scripts

### Running the development server.

```bash
    pnpm dev
```

### Building for production.

```bash
    pnpm build
```

### Running the production server.

```bash
    pnpm start
```

### Provider Concept For Refine

Providers are the building blocks of Refine, used to manage different aspects of your application, such as data fetching, routing, access control, and more.

They are pluggable, which means you can use the built-in providers or create your own. This allows you to customize the behavior of your application to suit your needs.

- Data Provider: Communication with the backend data source, handling data operations such as fetching, creating, updating, deleting records, caching, and invalidation.
- Authentication Provider: Manages user authentication and authorization processes. Handles redirection, error cases.
- Access Control Provider: Handles authorization and access control. Used to hide/disable buttons and menu items, or to protect routes and components.
- Notification Provider: Enables notification features like showing notification after successful mutations or errors.
- I18n Provider: Enables i18n features such as rendering translated menu items, button texts, table columns, page titles, and more.
- Live Provider: Enables real-time updates to your application. For example, when a user creates a new record, other users can see the new record in the list page without refreshing the page.
- Router Provider: Matches routes to resources, enables navigation features like breadcrumbs, automatic redirections after CRUD operations, rendering menu items.
- Audit Log Provider: Handles sending Audit Logs for CRUD operations.

## Learn More

To learn more about **Spd**, please check out the [Documentation](https://refine.dev/docs)

- **Refine** [Docs](https://refine.dev/docs)

- **Supabase Data Provider** [Docs](https://refine.dev/docs/core/providers/data-provider/#overview)
- **Ant Design** [Docs](https://refine.dev/docs/ui-frameworks/antd/tutorial/)
- **React Router** [Docs](https://refine.dev/docs/core/providers/router-provider/)

## License
