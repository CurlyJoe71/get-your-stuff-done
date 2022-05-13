function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',

        });
}

export default formatDate;