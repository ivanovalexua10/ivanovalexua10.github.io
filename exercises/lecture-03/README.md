Home work lecture-03

У наступному фпагменті випрвити помилки
Звичайний, нудний абзац. Намагайтеся не заснути.

<p id="exciting-paragraph">The most exciting paragraph on the page. One of a kind!</p>

<p id="exciting-div">The most exciting paragraph on the page. One of a kind!</div>

<style>
	#exciting-paragraph, exciting-div  {
		background: #f69d3c;
		border: 1px solid #696969;
		padding: 10px;
	}
</style>

Тут було виправлено дві помилки. 1. Ідентифікатор має бути ункальним. Я змінив їх на exciting-paragraph для першого речення, та на exciting-div для другого.
В <style> змінив значення id, для того щоб стилі були застосовані до обох елементів.

Також стосовно   <div id="exciting">The most exciting paragraph on the page. One of a kind!</div> - якщо тут мова йшла саме про текст, я би розмістив його в блочному елементі тегу <p>


4. Чи буде змінна --bgColor видимою для елемента body. Яким буде фон елемента body і чому.