import {
  getOrganizationSchema,
  getServiceSchema,
  getFaqSchema,
} from "@/lib/schema";

export function StructuredData() {
  const schemas = [
    getOrganizationSchema(),
    ...getServiceSchema(),
    getFaqSchema(),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
