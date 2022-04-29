    // src/components/activities.js

    import React from 'react'

    const Activities = ({ activities }) => {
      return (
        <div>
          <center><h1>Activity List</h1></center>
          {activities.map((activity) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{activity.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{activity.Distance}</h6>
                <p class="card-text">{activity.Time}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Activities
