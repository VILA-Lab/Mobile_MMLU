function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

document.querySelectorAll('.toggle-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const details = this.nextElementSibling;
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            this.textContent = 'Hide Options';
        } else {
            details.classList.add('hidden');
            this.textContent = 'Show Options';
        }});
});


// Root Element
var root = am5.Root.new("chartdiv");

// Theme Setup
root.setThemes([am5themes_Animated.new(root)]);

// Create Chart Container
var chart = root.container.children.push(am5percent.PieChart.new(root, {
  layout: root.verticalLayout,
  radius: am5.percent(100)
}));



// Inner Layer - Categories
var series0 = chart.series.push(am5percent.PieSeries.new(root, {
  valueField: "population",
  categoryField: "category",
  alignLabels: false,
  radius: am5.percent(50),
  innerRadius: am5.percent(25)
}));

// Middle Layer - Subcategories
var series1 = chart.series.push(am5percent.PieSeries.new(root, {
  valueField: "population",
  categoryField: "subcategory",
  alignLabels: false,
  radius: am5.percent(75),
  innerRadius: am5.percent(50)
}));

// Outer Layer - Topics
var series2 = chart.series.push(am5percent.PieSeries.new(root, {
  valueField: "population",
  categoryField: "topic",
  alignLabels: false,
  radius: am5.percent(100),
  innerRadius: am5.percent(75)
}));









// Data
var data = {
    "Arts & Culture": [
        {
            "subcategory": "Creative Arts",
            "topics": [
                {
                    "topic": "Art Techniques and architecture",
                    "population": 175
                },
                {
                    "topic": "Creativity",
                    "population": 210
                },
                {
                    "topic": "Photography Basics",
                    "population": 214
                }
            ]
        },
        {
            "subcategory": "Entertainment",
            "topics": [
                {
                    "topic": "Entertainment",
                    "population": 207
                },
                {
                    "topic": "Movie and TV Show",
                    "population": 230
                },
                {
                    "topic": "Sports",
                    "population": 188
                }
            ]
        },
        {
            "subcategory": "Design",
            "topics": [
                {
                    "topic": "Fashion and Style",
                    "population": 200
                },
                {
                    "topic": "Interior Design",
                    "population": 200
                }
            ]
        }
    ],
    "Business & Professional": [
        {
            "subcategory": "Professional Skills",
            "topics": [
                {
                    "topic": "Accounting",
                    "population": 205
                },
                {
                    "topic": "Human Resources",
                    "population": 144
                },
                {
                    "topic": "Personal Branding",
                    "population": 186
                }
            ]
        },
        {
            "subcategory": "Business",
            "topics": [
                {
                    "topic": "Business Management",
                    "population": 167
                },
                {
                    "topic": "E Commerce",
                    "population": 186
                },
                {
                    "topic": "Marketing  and sales strarigies",
                    "population": 162
                },
                {
                    "topic": "Project Management",
                    "population": 176
                }
            ]
        },
        {
            "subcategory": "Legal",
            "topics": [
                {
                    "topic": "Ethical Living",
                    "population": 171
                },
                {
                    "topic": "Ethics",
                    "population": 172
                },
                {
                    "topic": "Law",
                    "population": 206
                },
                {
                    "topic": "Legal Rights",
                    "population": 219
                }
            ]
        }
    ],
    "Education & Knowledge": [
        {
            "subcategory": "Academic",
            "topics": [
                {
                    "topic": "Basic Statistics",
                    "population": 219
                },
                {
                    "topic": "Elementary Mathematics",
                    "population": 254
                },
                {
                    "topic": "Formal Logic",
                    "population": 210
                },
                {
                    "topic": "High School Mathematics",
                    "population": 200
                },
                {
                    "topic": "Linguistics",
                    "population": 223
                },
                {
                    "topic": "Political Systems",
                    "population": 193
                },
                {
                    "topic": "Reading and Literature",
                    "population": 248
                }
            ]
        },
        {
            "subcategory": "Sciences",
            "topics": [
                {
                    "topic": "Conceptual Physics",
                    "population": 194
                },
                {
                    "topic": "Science Fundamentals",
                    "population": 191
                },
                {
                    "topic": "Social Sciences",
                    "population": 207
                }
            ]
        },
        {
            "subcategory": "Cultural",
            "topics": [
                {
                    "topic": "Cultural Awareness",
                    "population": 243
                },
                {
                    "topic": "Geography",
                    "population": 211
                },
                {
                    "topic": "Global Facts",
                    "population": 228
                },
                {
                    "topic": "Religious Studies",
                    "population": 215
                },
                {
                    "topic": "World History",
                    "population": 206
                }
            ]
        },
        {
            "subcategory": "Educational",
            "topics": [
                {
                    "topic": "Education Techniques",
                    "population": 146
                },
                {
                    "topic": "Logical Fallacies",
                    "population": 293
                }
            ]
        }
    ],
    "Environment & Outdoors": [
        {
            "subcategory": "Environment",
            "topics": [
                {
                    "topic": "Sustainable Living",
                    "population": 178
                },
                {
                    "topic": "Waste Management",
                    "population": 207
                }
            ]
        },
        {
            "subcategory": "Outdoor Skills",
            "topics": [
                {
                    "topic": "Gardening and Horticulture",
                    "population": 212
                },
                {
                    "topic": "Outdoor Survival Skills",
                    "population": 277
                },
                {
                    "topic": "Weather Forecasting",
                    "population": 205
                }
            ]
        }
    ],
    "Health & Wellness": [
        {
            "subcategory": "Wellness",
            "topics": [
                {
                    "topic": "Ergonomics",
                    "population": 204
                },
                {
                    "topic": "Nutrition and Diet",
                    "population": 151
                }
            ]
        },
        {
            "subcategory": "Health",
            "topics": [
                {
                    "topic": "First Aid",
                    "population": 221
                },
                {
                    "topic": "Medical and health Knowledge",
                    "population": 183
                },
                {
                    "topic": "Mental Health",
                    "population": 130
                },
                {
                    "topic": "Physical Fitness",
                    "population": 190
                }
            ]
        }
    ],
    "Home & Lifestyle": [
        {
            "subcategory": "Lifestyle",
            "topics": [
                {
                    "topic": "Automotive Care",
                    "population": 275
                },
                {
                    "topic": "Event Planning",
                    "population": 201
                },
                {
                    "topic": "Hobbies",
                    "population": 208
                },
                {
                    "topic": "Pet Care",
                    "population": 208
                },
                {
                    "topic": "Travel Planning",
                    "population": 214
                }
            ]
        },
        {
            "subcategory": "Home",
            "topics": [
                {
                    "topic": "Cooking and Recipes",
                    "population": 274
                },
                {
                    "topic": "Food Safety",
                    "population": 219
                },
                {
                    "topic": "Home Maintenance",
                    "population": 261
                },
                {
                    "topic": "Home Safety",
                    "population": 189
                }
            ]
        },
        {
            "subcategory": "Family",
            "topics": [
                {
                    "topic": "Holidays and Traditions",
                    "population": 236
                },
                {
                    "topic": "Parenting",
                    "population": 144
                },
                {
                    "topic": "Teens and Youth",
                    "population": 161
                }
            ]
        }
    ],
    "Personal Development": [
        {
            "subcategory": "Life Skills",
            "topics": [
                {
                    "topic": "Basic Life Skills",
                    "population": 209
                },
                {
                    "topic": "Career Development",
                    "population": 166
                },
                {
                    "topic": "Emotional Intelligence",
                    "population": 133
                },
                {
                    "topic": "Time Management",
                    "population": 211
                }
            ]
        },
        {
            "subcategory": "Financial",
            "topics": [
                {
                    "topic": "Personal Finance",
                    "population": 223
                },
                {
                    "topic": "Shopping",
                    "population": 241
                }
            ]
        }
    ],
    "Social & Communication": [
        {
            "subcategory": "Communication",
            "topics": [
                {
                    "topic": "Communication and Public Speaking",
                    "population": 134
                },
                {
                    "topic": "Podcasting",
                    "population": 211
                },
                {
                    "topic": "Public Speaking",
                    "population": 158
                },
                {
                    "topic": "Writing Skills",
                    "population": 203
                }
            ]
        },
        {
            "subcategory": "Social",
            "topics": [
                {
                    "topic": "Conflict Resolution",
                    "population": 152
                },
                {
                    "topic": "News And Information",
                    "population": 203
                },
                {
                    "topic": "Relationships",
                    "population": 173
                },
                {
                    "topic": "Social Etiquette",
                    "population": 200
                },
                {
                    "topic": "Social Media",
                    "population": 217
                }
            ]
        }
    ],
    "Technical & Digital": [
        {
            "subcategory": "Digital Security",
            "topics": [
                {
                    "topic": "Cybersecurity",
                    "population": 208
                },
                {
                    "topic": "Digital Literacy",
                    "population": 198
                },
                {
                    "topic": "Online Privacy",
                    "population": 219
                }
            ]
        },
        {
            "subcategory": "Technical Assistance",
            "topics": [
                {
                    "topic": "Digital Detox",
                    "population": 196
                },
                {
                    "topic": "Mobile Customization",
                    "population": 230
                },
                {
                    "topic": "Technical Help",
                    "population": 254
                }
            ]
        }
    ]
};





// Data Processing

var innerData = [];
var middleData = [];
var outerData = [];

am5.object.each(data, function(category, subcategories) {
  var totalCategoryPopulation = 0;

  am5.array.each(subcategories, function(subcategoryEntry) {
    var totalSubcategoryPopulation = 0;

    am5.array.each(subcategoryEntry.topics, function(topicEntry) {
      // Process outer layer - topics
      outerData.push({
        topic: topicEntry.topic,
        population: topicEntry.population
      });
      totalSubcategoryPopulation += topicEntry.population;
    });

    // Process middle layer - subcategories
    middleData.push({
      category: category,
      subcategory: subcategoryEntry.subcategory,
      population: totalSubcategoryPopulation
    });

    totalCategoryPopulation += totalSubcategoryPopulation;
  });

  // Process inner layer - categories
  innerData.push({
    category: category,
    population: totalCategoryPopulation
  });
});

// Set Data
series0.data.setAll(innerData);  // Inner Layer
series1.data.setAll(middleData); // Middle Layer
series2.data.setAll(outerData);  // Outer Layer




chart.children.unshift(am5.Label.new(root, {
  fontSize: 30,
  fontWeight: "bold",
  centerX: am5.percent(0),
  centerY: am5.percent(50),
  textAlign: "center"
}));





series0.ticks.template.setAll({ forceHidden: true });

series0.labels.template.setAll({
  radius: -1,
  text: "{category}",
  textType: "radial",
  fontSize: 9,
  wrap: true,                   // Wrap text to multiple lines if needed
  maxWidth: 45, 
  hideOversized: true,          // Hide labels that don’t fit
  oversizedBehavior: "truncate", // Truncate overly long text
  centerX: am5.percent(100)
});

series0.slices.template.setAll({
  strokeWidth: 2,
  tooltipText:
    "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} questions)"
});
series0.slices.template.states.create("hover", { scale: 0.95 });

series1.ticks.template.setAll({ forceHidden: true });

series1.labels.template.setAll({
  radius: -1,
  text: "{category}",
  textType: "radial",
  fontSize: 9,
  wrap: true,                   // Wrap text to multiple lines if needed
  maxWidth: 45,  
  hideOversized: true,          // Hide labels that don’t fit
  oversizedBehavior: "truncate", // Truncate overly long text
  centerX: am5.percent(100)
});

series1.slices.template.setAll({
  strokeWidth: 2,
  tooltipText:
    "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} questions)"
});
series1.slices.template.states.create("hover", { scale: 0.95 });

series2.ticks.template.setAll({ forceHidden: true });

series2.labels.template.setAll({
  radius: -1,
  text: "{category}",
  textType: "radial",
  fontSize: 9,
  wrap: true,                   // Wrap text to multiple lines if needed
  maxWidth: 45,   
  hideOversized: true,          // Hide labels that don’t fit
  oversizedBehavior: "truncate", // Truncate overly long text
  centerX: am5.percent(100)
});

series2.slices.template.setAll({
  strokeWidth: 2,
  tooltipText:
    "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} questions)"
});
series2.slices.template.states.create("hover", { scale: 0.95 });


chart.set("background", null);
root.interfaceColors.set("grid", null);











// Animations
series0.appear(1000, 100);
series1.appear(1000, 100);
series2.appear(1000, 100);
