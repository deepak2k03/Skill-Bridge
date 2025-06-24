import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Camera, 
  Edit3, 
  Save,
  MapPin,
  Calendar,
  Star,
  Award,
  Plus,
  X,
  Clock,
  Users,
  BookOpen,
  Globe
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const Profile = () => {
  const { user, setUser } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    bio: 'Passionate full-stack developer with 5+ years of experience. Love teaching and learning new technologies. Currently focused on machine learning and AI.',
    location: user?.location || '',
    skills: user?.skills || [],
    wantToLearn: user?.wantToLearn || [],
    availability: 'Weekends and evenings',
    languages: ['English (Native)', 'Spanish (Intermediate)'],
    timezone: 'PST (UTC-8)'
  });
  const [newSkill, setNewSkill] = useState('');
  const [newLearning, setNewLearning] = useState('');

  const reviews = [
    {
      id: 1,
      reviewer: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      skill: 'React Development',
      comment: 'Alex is an amazing teacher! Clear explanations and great examples.',
      date: '2025-01-15'
    },
    {
      id: 2,
      reviewer: 'Mike Rodriguez',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      skill: 'Node.js',
      comment: 'Very patient and knowledgeable. Helped me understand complex concepts easily.',
      date: '2025-01-10'
    },
    {
      id: 3,
      reviewer: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      skill: 'Python Programming',
      comment: 'Great session! Alex provided practical examples and was very helpful.',
      date: '2025-01-05'
    }
  ];

  const achievements = [
    { title: 'Expert Teacher', description: '50+ successful exchanges', icon: '🎓' },
    { title: 'Community Helper', description: 'Top 10% contributor', icon: '🤝' },
    { title: 'Quick Responder', description: 'Responds within 2 hours', icon: '⚡' },
    { title: 'Reliable Partner', description: '100% completion rate', icon: '✅' }
  ];

  const handleSave = () => {
    if (user) {
      setUser({
        ...user,
        name: editForm.name,
        location: editForm.location,
        skills: editForm.skills,
        wantToLearn: editForm.wantToLearn
      });
    }
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !editForm.skills.includes(newSkill.trim())) {
      setEditForm({
        ...editForm,
        skills: [...editForm.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setEditForm({
      ...editForm,
      skills: editForm.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const addLearning = () => {
    if (newLearning.trim() && !editForm.wantToLearn.includes(newLearning.trim())) {
      setEditForm({
        ...editForm,
        wantToLearn: [...editForm.wantToLearn, newLearning.trim()]
      });
      setNewLearning('');
    }
  };

  const removeLearning = (skillToRemove: string) => {
    setEditForm({
      ...editForm,
      wantToLearn: editForm.wantToLearn.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
              <p className="text-gray-600 mt-1">Manage your profile information and showcase your skills.</p>
            </div>
            <button 
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full hover:shadow-lg transition-all duration-200 flex items-center"
            >
              {isEditing ? <Save className="w-5 h-5 mr-2" /> : <Edit3 className="w-5 h-5 mr-2" />}
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>

        <div className="p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-8 text-center mb-8">
                <div className="relative inline-block mb-6">
                  <img 
                    src={user?.avatar} 
                    alt={user?.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                  {isEditing && (
                    <button className="absolute bottom-2 right-2 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                      <Camera className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="text-2xl font-bold text-gray-900 text-center bg-transparent border-b-2 border-primary-300 focus:border-primary-500 outline-none mb-2 w-full"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{user?.name}</h2>
                )}

                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(user?.rating || 0) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-gray-600">{user?.rating}/5.0</span>
                </div>

                <div className="flex items-center justify-center text-gray-600 mb-6">
                  <MapPin className="w-4 h-4 mr-1" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.location}
                      onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                      className="bg-transparent border-b border-gray-300 focus:border-primary-500 outline-none text-center"
                    />
                  ) : (
                    <span>{user?.location}</span>
                  )}
                </div>

                {isEditing ? (
                  <textarea
                    value={editForm.bio}
                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none h-24"
                    placeholder="Tell others about yourself..."
                  />
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">{editForm.bio}</p>
                )}
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Exchanges</span>
                    </div>
                    <span className="font-semibold text-gray-900">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">Hours Taught</span>
                    </div>
                    <span className="font-semibold text-gray-900">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700">Students</span>
                    </div>
                    <span className="font-semibold text-gray-900">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">Achievements</span>
                    </div>
                    <span className="font-semibold text-gray-900">12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Skills Section */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Skills I Can Teach</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {editForm.skills.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center">
                        {skill}
                        {isEditing && (
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                  {isEditing && (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <button
                        onClick={addSkill}
                        className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Want to Learn Section */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Skills I Want to Learn</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {editForm.wantToLearn.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center">
                        {skill}
                        {isEditing && (
                          <button
                            onClick={() => removeLearning(skill)}
                            className="ml-2 text-green-600 hover:text-green-800"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                  {isEditing && (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newLearning}
                        onChange={(e) => setNewLearning(e.target.value)}
                        placeholder="Add a skill to learn..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        onKeyPress={(e) => e.key === 'Enter' && addLearning()}
                      />
                      <button
                        onClick={addLearning}
                        className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Availability</h3>
                  {isEditing ? (
                    <textarea
                      value={editForm.availability}
                      onChange={(e) => setEditForm({ ...editForm, availability: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none h-20"
                    />
                  ) : (
                    <p className="text-gray-600">{editForm.availability}</p>
                  )}
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Languages</h3>
                  <div className="space-y-2">
                    {editForm.languages.map((language, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">{language}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Achievements</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">Recent Reviews</h3>
                    <span className="text-sm text-gray-600">{reviews.length} total reviews</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                        <div className="flex items-start space-x-4">
                          <img 
                            src={review.avatar} 
                            alt={review.reviewer}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-gray-900">{review.reviewer}</h4>
                                <p className="text-sm text-gray-600">for {review.skill}</p>
                              </div>
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700 mb-2">{review.comment}</p>
                            <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;