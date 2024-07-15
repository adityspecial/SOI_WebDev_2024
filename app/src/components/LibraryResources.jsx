import React from 'react';
import "./LibraryResources.css"

const LibraryResources = () => {

  
  return (
    <div className="library-resources-section bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Library Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="resource-card">
            <div className="banner-image" style={{ backgroundImage: "url(https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-pp-mrh-4-thy-fathers-house.jpg)" }}></div>
            <p className="text-xl font-bold">50000+</p>
            <p>Books</p>
          </div>
          <div className="resource-card">
            <div className="banner-image" style={{ backgroundImage: "url(https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-ec-1-looking-for-lala.jpg)" }}></div>
            <p className="text-xl font-bold">2000+</p>
            <p>E-Books</p>
          </div>
          <div className="resource-card">
            <div className="banner-image" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_wCcHnOvWZLAiwEadxu3uDjtTpxb_3Tw9w&s)" }}></div>
            <p className="text-xl font-bold">6000+</p>
            <p>E-Journals</p>
          </div>
          <div className="resource-card">
            <div className="banner-image" style={{ backgroundImage: "url(https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-cw-in-the-shade-of-the-mulberry-tree.jpg)" }}></div>
            <p className="text-xl font-bold">2000+</p>
            <p>Bound Volumes</p>
          </div>
          <div className="resource-card">
            <div className="banner-image" style={{ backgroundImage: "url(https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-km-1-godhead.jpg)" }}></div>
            <p className="text-xl font-bold">3000+</p>
            <p>Theses</p>
          </div>
          <div className="resource-card">
            <div className="banner-image" style={{ backgroundImage: "url(https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-cm-some-girls-do.jpg)" }}></div>
            <p className="text-xl font-bold">3000+</p>
            <p>Technical Reports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryResources;
