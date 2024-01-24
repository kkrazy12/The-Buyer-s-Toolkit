<template>
    <section id="leftSection">
        <ul>
            <li v-for="lesson in timetable" :key="lesson.id">
                <!--For each data set in our timetable array, take each id-->
                <h2>{{ lesson.CourseDay }}</h2>
                <!--//in different style tags, output lesson day, module and time-->
                <p>{{ lesson.CourseName }} -- {{ lesson.CourseLength }}</p>
                <!--This will output three times because we used an id on each dataset & are using a for loop-->
            </li>
        </ul>
    </section>
</template>

<script setup>

// var timetable = [
//     {
//         id: 0,
//         day: 'Monday',
//         time: '10:00am',
//         module: 'DAT661'
//     },

//     {
//         id: 1,
//         day: 'Tuesday',
//         time: '09:00am',
//         module: 'ADA600'
//     },

//     {
//         id: 2,
//         day: 'Wednesday',
//         time: '11:00am',
//         module: 'INDE601'
//     }
// ];


</script>