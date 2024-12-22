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
root.setThemes([am5themes_Animated.new(root)])

// Create Chart Container
var chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    layout: root.verticalLayout,
    radius: am5.percent(100),
  }),
)

// Inner Layer - Categories
var series0 = chart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "population",
    categoryField: "category",
    alignLabels: false,
    radius: am5.percent(35),
    innerRadius: am5.percent(10),
  }),
)

// Middle Layer - Subcategories
var series1 = chart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "population",
    categoryField: "subcategory",
    alignLabels: false,
    radius: am5.percent(60),
    innerRadius: am5.percent(35),
  }),
)

// Outer Layer - Topics
var series2 = chart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "population",
    categoryField: "topic",
    alignLabels: false,
    radius: am5.percent(85),
    innerRadius: am5.percent(60),
  }),
)

// After series2 definition but before the data section
chart.seriesContainer.children.unshift(am5.Circle.new(root, {
    radius: 100,
    centerX: am5.p50,
    centerY: am5.p50,
    fill: am5.color(0x055FFF),
    fillOpacity: 0.1
  }));
  
  /////////////////////////////
  // Add the logo using SVG
  chart.seriesContainer.children.unshift(am5.Picture.new(root, {
    centerX: am5.p50,
    centerY: am5.p50,
    width: 75,
    height: 75,
    src: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="#6a1b9a" opacity="0.9"/>
        <text x="50" y="40" 
          font-size="20" 
          text-anchor="middle" 
          fill="white" 
          font-family="Arial, sans-serif" 
          font-weight="bold">Mobile</text>
        <text x="50" y="65" 
          font-size="18" 
          text-anchor="middle" 
          fill="white" 
          font-family="Arial, sans-serif" 
          font-weight="bold">MMLU</text>
      </svg>
    `)
    // src:"images/mobile_mmlu_no_bg.png"
  }));
/////////////////////////////

// console.log("Starting icon placement...");

var iconData = [
    { angle: 45, icon: "images/icons/education.png" },      // Top right
    { angle: 90, icon: "images/icons/daily_routine.png" },  // Right
    { angle: 135, icon: "images/icons/web_service.png" },   // Bottom right
    { angle: 165, icon: "images/icons/healthcare.png" }, // Bottom
    { angle: 225, icon: "images/icons/self_growth.png" },      // Bottom left
    { angle: 270, icon: "images/icons/family.png" },         // Left
    { angle: 315, icon: "images/icons/palette.png" },  // Top left
    { angle: 350, icon: "images/icons/outdoors.png" } // Top
];

// Get dimensions from chart
var chartWidth = chart.width();
var chartHeight = chart.height();
var centerX = chartWidth / 2;
var centerY = chartHeight / 2;
var chartRadius = Math.min(chartWidth, chartHeight) / 2 * 0.78;

// Create a container at root level
var outerContainer = root.container.children.push(am5.Container.new(root, {
    width: am5.p100,
    height: am5.p100,
    layout: root.verticalLayout,
    paddingTop: 0,
    paddingBottom: 0
}));

iconData.forEach(function(item, index) {
    // Convert angle to radians (subtract 90 to start from top)
    var angleRad = ((item.angle - 90) * Math.PI / 180);
    
    // Calculate position (20% larger than chart radius)
    var distance = chartRadius * 1.17;
    var x = centerX + (distance * Math.cos(angleRad));
    var y = centerY + (distance * Math.sin(angleRad));

    if (item.angle == 90 || item.angle == 270 ) {
        distance = chartRadius*1.15;
        x = centerX + (distance * Math.cos(angleRad));
        y = centerY + (distance * Math.sin(angleRad));
    }
    if (item.angle == 315 || item.angle == 45) {
        distance = chartRadius*1.15;
        x = centerX + (distance * Math.cos(angleRad));
        y = centerY + (distance * Math.sin(angleRad));
    }
    if (item.angle == 350) {
        distance = chartRadius*1.13;
        x = centerX + (distance * Math.cos(angleRad));
        y = centerY + (distance * Math.sin(angleRad));
    }


    // Create icon
    var icon = am5.Picture.new(root, {
        x: x,
        y: y,
        width: 40,
        height: 40,
        src: item.icon,
        layer: 5,
        centerX: am5.p50,
        centerY: am5.p50,
        position: "absolute"
    });

    // Add to outer container
    outerContainer.children.push(icon);
    
    // Add debug circle if needed during development
    /*var debugCircle = am5.Circle.new(root, {
        x: x,
        y: y,
        radius: 5,
        fill: am5.color(0xFF0000),
        layer: 4,
        position: "absolute"
    });
    outerContainer.children.push(debugCircle);*/
});


/////////////////////////////
// Data
var data = {
  "Academic & Learning": [
    {
      subcategory: "Basic Mathematics",
      topics: [
        { topic: "elementary_mathematics", population: 254 },
        { topic: "high_school_mathematics", population: 200 },
        { topic: "basic_statistics", population: 219 },
      ],
    },
    {
      subcategory: "Basic Sciences",
      topics: [
        { topic: "conceptual_physics", population: 194 },
        { topic: "science_fundamentals", population: 191 },
      ],
    },
    {
      subcategory: "Critical Thinking",
      topics: [
        { topic: "formal_logic", population: 210 },
        { topic: "logical_fallacies", population: 293 },
      ],
    },
    {
      subcategory: "Education",
      topics: [
        { topic: "education_techniques", population: 146 },
        { topic: "reading_and_literature", population: 248 },
        { topic: "writing_skills", population: 203 },
        { topic: "linguistics", population: 223 },
      ],
    },
    {
      subcategory: "Social Sciences",
      topics: [
        { topic: "social_sciences", population: 207 },
        { topic: "political_systems", population: 193 },
        { topic: "world_history", population: 206 },
        { topic: "geography", population: 211 },
      ],
    },
  ],
  "Business & Career": [
    {
      subcategory: "Business Studies",
      topics: [
        { topic: "project_management", population: 176 },
        { topic: "human_resources", population: 144 },
        { topic: "business_management", population: 167 },
        { topic: "marketing__and_sales_strarigies", population: 162 },
      ],
    },
    {
      subcategory: "Personal Business",
      topics: [
        { topic: "personal_finance", population: 223 },
        { topic: "e_commerce", population: 186 },
        { topic: "shopping", population: 241 },
        { topic: "accounting", population: 205 },
      ],
    },
    {
      subcategory: "Communication",
      topics: [
        { topic: "communication_skills", population: 134 },
        { topic: "social_etiquette", population: 200 },
        { topic: "public_speaking", population: 158 },
      ],
    },
  ],
  "Technology & Digital": [
    {
      subcategory: "Digital Literacy",
      topics: [
        { topic: "digital_literacy", population: 198 },
        { topic: "technical_help", population: 254 },
        { topic: "mobile_customization", population: 230 },
      ],
    },
    {
      subcategory: "Privacy and Security",
      topics: [
        { topic: "cybersecurity", population: 208 },
        { topic: "online_privacy", population: 219 },
      ],
    },
    {
      subcategory: "Social Media",
      topics: [
        { topic: "social_media", population: 217 },
        { topic: "digital_detox", population: 196 },
      ],
    },
  ],
  "Health & Safety": [
    {
      subcategory: "Health and Wellness",
      topics: [
        { topic: "mental_health", population: 130 },
        { topic: "physical_fitness", population: 190 },
        { topic: "medical_and_health_knowledge", population: 183 },
        { topic: "ergonomics", population: 204 },
      ],
    },
    {
      subcategory: "Everyday Safety",
      topics: [
        { topic: "first_aid", population: 221 },
        { topic: "outdoor_survival_skills", population: 277 },
        { topic: "automotive_care", population: 275 },
      ],
    },
  ],
  "Lifestyle & Personal": [
    {
      subcategory: "Daily Life Skills",
      topics: [
        { topic: "basic_life_skills", population: 209 },
        { topic: "time_management", population: 211 },
        { topic: "conflict_resolution", population: 152 },
        { topic: "event_planning", population: 201 },
      ],
    },
    {
      subcategory: "Personal Growth",
      topics: [
        { topic: "creativity", population: 210 },
        { topic: "emotional_intelligence", population: 133 },
        { topic: "personal_branding", population: 186 },
        { topic: "career_development", population: 166 },
      ],
    },
    {
      subcategory: "Lifestyle",
      topics: [
        { topic: "fashion_and_style", population: 200 },
        { topic: "travel_planning", population: 214 },
        { topic: "sports", population: 188 },
        { topic: "gardening_and_horticulture", population: 212 },
      ],
    },
    {
      subcategory: "Entertainment",
      topics: [
        { topic: "entertainment", population: 207 },
        { topic: "movie_and_tv_show", population: 230 },
        { topic: "podcasting", population: 211 },
        { topic: "hobbies", population: 208 },
        { topic: "photography_basics", population: 214 },
      ],
    },
  ],
  "Home & Family": [
    {
      subcategory: "Home and Living",
      topics: [
        { topic: "home_safety", population: 189 },
        { topic: "pet_care", population: 208 },
        { topic: "waste_management", population: 207 },
        { topic: "home_maintenance", population: 261 },
      ],
    },
    {
      subcategory: "Family",
      topics: [
        { topic: "parenting", population: 144 },
        { topic: "relationships", population: 173 },
        { topic: "teens_and_youth", population: 161 },
      ],
    },
    {
      subcategory: "Food and Cooking",
      topics: [
        { topic: "cooking_and_recipes", population: 274 },
        { topic: "food_safety", population: 219 },
        { topic: "nutrition_and_diet", population: 151 },
      ],
    },
  ],
  "Culture & Society": [
    {
      subcategory: "Arts and Design",
      topics: [
        { topic: "art_techniques_and_architecture", population: 175 },
        { topic: "interior_design", population: 200 },
      ],
    },
    {
      subcategory: "Culture and Religion",
      topics: [
        { topic: "cultural_awareness", population: 243 },
        { topic: "religious_studies", population: 215 },
        { topic: "holidays_and_traditions", population: 236 },
      ],
    },
    {
      subcategory: "Legal",
      topics: [
        { topic: "legal_rights", population: 219 },
        { topic: "law", population: 206 },
      ],
    },
    {
      subcategory: "Ethics and Morality",
      topics: [
        { topic: "ethical_living", population: 171 },
        { topic: "ethics", population: 172 },
      ],
    },
  ],
  "Environment": [
    {
      subcategory: "Environment",
      topics: [{ topic: "sustainable_living", population: 178 }],
    },
    {
      subcategory: "Weather",
      topics: [{ topic: "weather_forecasting", population: 205 }],
    },
  ],
  "Miscellaneous": [
    {
      subcategory: "Miscellaneous",
      topics: [
        { topic: "global_facts", population: 228 },
        { topic: "news_and_information", population: 203 },
      ],
    },
  ],
}


// Data Processing
var innerData = []
var middleData = []
var outerData = []

am5.object.each(data, function (category, subcategories) {
  var totalCategoryPopulation = 0

  am5.array.each(subcategories, function (subcategoryEntry) {
    var totalSubcategoryPopulation = 0

    am5.array.each(subcategoryEntry.topics, function (topicEntry) {
      // Process outer layer - topics
      outerData.push({
        category: category,
        subcategory: subcategoryEntry.subcategory,
        topic: topicEntry.topic,
        population: topicEntry.population,
      })
      totalSubcategoryPopulation += topicEntry.population
    })

    // Process middle layer - subcategories
    middleData.push({
      category: category,
      subcategory: subcategoryEntry.subcategory,
      population: totalSubcategoryPopulation,
    })

    totalCategoryPopulation += totalSubcategoryPopulation
  })

  // Process inner layer - categories
  innerData.push({
    category: category,
    population: totalCategoryPopulation,
  })
})

// Capitalize each word in topic
outerData = outerData.map(item => ({
    ...item,
    topic: item.topic.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}));

// Set Data
series0.data.setAll(innerData) // Inner Layer
series1.data.setAll(middleData) // Middle Layer
series2.data.setAll(outerData) // Outer Layer

chart.children.unshift(
  am5.Label.new(root, {
    fontSize: 30,
    fontWeight: "bold",
    centerX: am5.percent(0),
    centerY: am5.percent(50),
    textAlign: "center",
  }),
)

series0.ticks.template.setAll({ forceHidden: true })
series0.labels.template.setAll({
  radius: 5,
  text: "{category}",
  textType: "radial",
  fontSize: 9,
  wrap: true,
  textAlign: "center",
  maxWidth: 85,
  hideOversized: true,
  oversizedBehavior: "truncate",
  centerX: am5.percent(110)
})
series0.slices.template.setAll({
  strokeWidth: 0,
  stroke: am5.color(0xffffff),
  tooltipText:
    "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} questions)",
})

series1.ticks.template.setAll({ forceHidden: true })
series1.labels.template.setAll({
  radius: 5,
  text: "{subcategory}",
  textType: "radial",
  fontSize: 9,
  wrap: true,
  textAlign: "center",
  maxWidth: 95,
  hideOversized: true,
  oversizedBehavior: "truncate",
  centerX: am5.percent(105)
})
series1.slices.template.setAll({
  strokeWidth: 0,
  stroke: am5.color(0xffffff),
  fillOpacity: 0.85,
  tooltipText:
    "{subcategory}: {valuePercentTotal.formatNumber('0.00')}% ({value} questions)",
})

series2.ticks.template.setAll({ forceHidden: true })

series2.labels.template.setAll({
  radius: 5,
  text: "{topic}",
  textType: "radial",
  textAlign: "center",
  fontSize: 9,
  wrap: true,
  maxWidth: 95,
  rotation: 60,
  hideOversized: true,
  oversizedBehavior: "truncate",
  centerX: am5.percent(100),
})

series2.slices.template.setAll({
  strokeWidth: 0,
  stroke: am5.color(0xffffff),
  fillOpacity: 0.6,
  tooltipText:
    "{topic}: {valuePercentTotal.formatNumber('0.00')}% ({value} questions)",
})

chart.set("background", null)

root.interfaceColors.set("grid", null)

// Define distinct colors for inner layer slices (categories)
var innerLayerColors = [
  am5.color(0x1f77b4), // Blue
  am5.color(0xff7f0e), // Orange
  am5.color(0x2ca02c), // Green
  am5.color(0xd62728), // Red
  am5.color(0x9467bd), // Purple
  am5.color(0x8c564b), // Brown
  am5.color(0xe377c2), // Pink
  am5.color(0x7f7f7f), // Grey
  am5.color(0xbcbd22), // Olive
  am5.color(0x17becf), // Cyan
]

// Assign colors to inner layer slices
series0.events.on("datavalidated", function () {
  series0.slices.each(function (slice, index) {
    slice.set("fill", innerLayerColors[index % innerLayerColors.length])
  })
})

// After data is validated, map colors and make strokes identical to slice colors
series0.events.on("datavalidated", function () {
  var categoryColorMap = {}
  series0.slices.each(function (slice) {
    var category = slice.dataItem.dataContext.category

    var fill = slice.get("fill")
    categoryColorMap[category] = fill
  })

  // Assign subcategory colors from category
  var subcategoryColorMap = {}
  series1.slices.each(function (slice) {
    var subcategory = slice.dataItem.dataContext.subcategory
    var parentCategory = slice.dataItem.dataContext.category
    var parentColor = categoryColorMap[parentCategory]
    slice.set("fill", parentColor)
    subcategoryColorMap[subcategory] = parentColor
  })

  // Assign topic colors from subcategory
  series2.slices.each(function (slice) {
    var subcategory = slice.dataItem.dataContext.subcategory
    var parentColor = subcategoryColorMap[subcategory]
    slice.set("fill", parentColor)
  })

  // Make the strokes the same color as the fill
  series0.slices.template.adapters.add("stroke", function (stroke, target) {
    return target.get("fill")
  })
  series1.slices.template.adapters.add("stroke", function (stroke, target) {
    return target.get("fill")
  })
  series2.slices.template.adapters.add("stroke", function (stroke, target) {
    return target.get("fill")
  })
})

// Animations
series0.appear(1000, 100);
series1.appear(1000, 100);
series2.appear(1000, 100);

// Add this to your existing scripts.js file
document.addEventListener('DOMContentLoaded', function() {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalImage = document.createElement('img');
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '×';
    
    modalContent.appendChild(modalImage);
    modalContent.appendChild(closeButton);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Add click handlers to all expandable images
    const images = document.querySelectorAll('.expandable-image');
    images.forEach(img => {
        img.addEventListener('click', function() {
            modalImage.src = this.src;
            modalOverlay.classList.add('active');
        });
    });

    // Close modal when clicking the close button or outside the image
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
    });

    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
        }
    });
});