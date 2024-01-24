<template>
  <section id="rightSection">
    <div class="text-center">
    <div v-if="timetable.length">
      <div v-for="lesson in timetable" :key="lesson.id" class="course-item">
        <h2>{{ lesson.CourseDay }}</h2>
        <p>{{ lesson.CourseName }} -- {{ lesson.CourseLength }}</p>
      </div>
    </div>
    <!--if content isn't loaded yet then show loading message-->
    <p v-else>Loading...</p>
  </div>
  </section>
</template>

<script setup>
//fetching data from firestore
import { ref, onMounted } from 'vue';
import db from './../../firebase/config';
import { collection, getDocs, query } from 'firebase/firestore';

//used ref to make my timetable array reactive
const timetable = ref([]);

const fetchData = async () => {
  const q = query(collection(db, 'classes'));
  const snapshot = await getDocs(q);

  snapshot.forEach((doc) => {
    console.log(doc.data());
    timetable.value.push({
      id: doc.id,
      CourseDay: doc.data().CourseDay,
      CourseLength: doc.data().CourseLength,
      CourseName: doc.data().CourseName,
    });

    console.log(timetable.value);
  });
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
/* .course-item {
  background-color: #f5f5f5;
  padding: 1em;
  margin-bottom: 1em;
  border: 4px solid lightgray;
  border-radius: 5px;
  display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.course-item:hover{
  border: 4px #F27233 solid;
}

.course-item h2 {
  font-size: 20px;
  color: #425563;
  font-family: 'oswald';
}

.course-item p {
  font-size: 16px;
  color: black;
  font-family: sans-serif;
} */

</style>