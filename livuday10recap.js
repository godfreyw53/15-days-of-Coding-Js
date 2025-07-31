const school = {
    name: "Simboyi Primary School",
    location: "North Maragoli",
    isItHighSchool: false,
    teachers: [
        {
            name: "Maraga",
            code: 7096,
            role: "Principal"
        },
        {
            name: "Elachi",
            code: 2987,
            role: "Deputy Principal"
        },
        {
            name: "Cleophas",
            code: 6739,
            role: "Senior Teacher"
        },
        {
            name: "Kasongo",
            code: 3249,
            role: "Normal"
        }
    ],
    grade: [
        {
            name: "Grade 1",
            pupils: [
                {
                    name: "Alex",
                    parentName: "Masaba",
                    subjects: [
                        {
                            maths: 80,
                            English: 87,
                            kiswahili: 76
                        }
                    ]
                },
                {
                    name: "Brian",
                    parentName: "Consolata",
                    subjects: [
                        {
                            maths: 56,
                            English: 88,
                            kiswahili: 66
                        }
                    ]
                },
                {
                    name: "Clement",
                    parentName: "Aturo",
                    subjects: [
                        {
                            maths: 70,
                            English: 67,
                            kiswahili: 96
                        }
                    ]
                }
            ]
        },
        {
            name: "Grade 2",
            pupils: [
                {
                    name: "Brown",
                    parentName: "Adidas",
                    subjects: [
                        {
                            maths: 82,
                            English: 67,
                            kiswahili: 66
                        }
                    ]
                },
                {
                    name: "Groke",
                    parentName: "Nike",
                    subjects: [
                        {
                            maths: 57,
                            English: 68,
                            kiswahili: 76
                        }
                    ]
                },
                {
                    name: "Element",
                    parentName: "Explaine",
                    subjects: [
                        {
                            maths: 72,
                            English: 77,
                            kiswahili: 96
                        }
                    ]
                }
            ]
        }
    ]
}
school.grade.forEach((grade) => {
    console.log(`\n${grade.name}`);
    grade.pupils.forEach((pupil) => {
        console.log(`${pupil.name} (Parent: ${pupil.parentName})`);
        console.log("Subjects:", pupil.subjects[0]);
    });
});
