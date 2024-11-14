class NewsWidget {
    constructor(element) {
        this._element = element;
    }
    
    deleteLastNews() {
        console.log('---')
        const newsElements = document.querySelectorAll('.news-item');

        const lastNewsElement = newsElements[newsElements.length - 1];

        this._element.removeChild(lastNewsElement);
    }

    addNewNews(title){
        const item = document.createElement('li');

        item.textContent = title;

        this._element.insertBefore(item, this._element.querySelector('.news-item'));
        
        this.deleteLastNews();
    }
}