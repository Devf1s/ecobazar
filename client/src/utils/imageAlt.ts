export const generateImageAlt = (path: string): string => {
	// Get filename from path
	const fileName = path.split('/').pop(); 

	// If the file exists, remove the extension and change dashes on spaces 
	if (fileName) {
		const altText = fileName.split('.')[0].replace(/-/g, ' ');
		
		// First latter is uppercase
		return altText.charAt(0).toUpperCase() + altText.slice(1);
	}

	// If the filename doesn't found, return 'Image' 
	return 'Image';
}