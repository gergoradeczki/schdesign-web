import { graphql } from "gatsby";
import React from "react";

import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";

export default function About({ data }: { data: GatsbyTypes.Query }) {
	return (
		<Layout>
			<Seo title="Rólunk" />
			<Separator>Rólunk</Separator>
			<section className="container mx-auto mt-4 flex flex-col p-4 px-4">
				{data.allContentfulParagraph.edges.map(({ node }, i) => {
					return (
						<Paragraph
							key={node.title ?? `${i}`}
							title={node.title ?? "Ez eltűnt 😔"}
						>
							{node.content?.childMdx?.body ?? "Ez eltűnt 😔"}
						</Paragraph>
					);
				})}
			</section>
		</Layout>
	);
}

export const query = graphql`
	query AboutQuery {
		allContentfulParagraph(sort: { order: ASC, fields: order }) {
			edges {
				node {
					title
					order
					content {
						childMdx {
							body
						}
					}
				}
			}
		}
	}
`;
