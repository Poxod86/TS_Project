enum QuestionsStatus {
	PUBLISHED = 'published',
	DRAFT = 'draft',
	DELETED = 'deleted'
}

async function getFaqs(req: {
	topicID: number, 
	status: QuestionsStatus
}): Promise<{
	question: string,
	answer: string,
	tags:string[],
	likes: number,
	status: QuestionsStatus
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}