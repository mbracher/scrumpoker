<script lang="ts">
    import { firebaseApp } from './firebase-app'
    import { getFirestore, collection, addDoc } from 'firebase/firestore';
    import { collectionData } from 'rxfire/firestore'
    import { startWith } from 'rxjs/operators';

    const firestore = getFirestore(firebaseApp);


    const selectedStories = collection(firestore, 'story');
    const stories = collectionData(selectedStories, {idField: 'id'}).pipe(startWith([]));

    let text = '';

    function add() {
        addDoc(selectedStories, {text: text} );
    }
</script>

<ul>
	{#each $stories as story}

        <li>{story.text} ({story.id})</li>
        
	{/each}
</ul>

<input bind:value={text}>

<button on:click={add}>Add Task</button>