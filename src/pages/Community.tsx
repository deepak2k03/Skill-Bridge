import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Search, 
  Filter, 
  Star, 
  MessageCircle,
  UserPlus,
  MapPin,
  Clock,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  Heart,
  Share2,
  Tag,
  X,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showTagFilter, setShowTagFilter] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    rating: '',
    availability: '',
    experience: ''
  });

  const availableTags = [
    'Programming', 'Web Development', 'Mobile Development', 'Data Science', 
    'Machine Learning', 'AI', 'UI/UX Design', 'Graphic Design', 'Photography',
    'Digital Marketing', 'Content Writing', 'SEO', 'Social Media', 'Business',
    'Languages', 'Spanish', 'French', 'German', 'Japanese', 'Korean', 'Chinese',
    'Music', 'Guitar', 'Piano', 'Singing', 'Art', 'Drawing', 'Painting',
    'Cooking', 'Fitness', 'Yoga', 'Dance', 'Writing', 'Public Speaking',
    'Leadership', 'Project Management', 'Finance', 'Accounting', 'Sales'
  ];

  const communityMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      location: 'New York, USA',
      skills: ['Machine Learning', 'Python', 'Data Science'],
      wantToLearn: ['React', 'Web Development', 'UI/UX'],
      tags: ['Programming', 'Data Science', 'AI', 'Python'],
      exchanges: 24,
      joined: '2024-03-15',
      online: true,
      matchScore: 95,
      experience: 'Expert',
      availability: 'Weekends'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      location: 'Madrid, Spain',
      skills: ['Spanish', 'Guitar', 'Photography'],
      wantToLearn: ['Web Development', 'Digital Marketing'],
      tags: ['Languages', 'Spanish', 'Music', 'Guitar', 'Photography', 'Art'],
      exchanges: 18,
      joined: '2024-02-20',
      online: false,
      matchScore: 87,
      experience: 'Intermediate',
      availability: 'Evenings'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      location: 'London, UK',
      skills: ['Digital Marketing', 'Content Writing', 'SEO'],
      wantToLearn: ['Python', 'Data Analysis'],
      tags: ['Digital Marketing', 'Content Writing', 'SEO', 'Social Media', 'Business'],
      exchanges: 32,
      joined: '2024-01-10',
      online: true,
      matchScore: 92,
      experience: 'Expert',
      availability: 'Flexible'
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      location: 'Seoul, Korea',
      skills: ['Korean', 'Graphic Design', 'Illustration'],
      wantToLearn: ['UI/UX Design', 'Figma'],
      tags: ['Languages', 'Korean', 'Graphic Design', 'UI/UX Design', 'Art'],
      exchanges: 15,
      joined: '2024-04-05',
      online: true,
      matchScore: 78,
      experience: 'Intermediate',
      availability: 'Mornings'
    }
  ];

  const reviews = [
    {
      id: 1,
      reviewer: {
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      reviewee: {
        name: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      rating: 5,
      skill: 'Machine Learning',
      comment: 'Sarah is an exceptional teacher! Her explanations are clear and she provides excellent hands-on examples. Highly recommended for anyone looking to learn ML.',
      date: '2025-01-20',
      helpful: 12
    },
    {
      id: 2,
      reviewer: {
        name: 'Emma Thompson',
        avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      reviewee: {
        name: 'Mike Rodriguez',
        avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      rating: 4,
      skill: 'Spanish Language',
      comment: 'Mike makes learning Spanish fun and engaging. His cultural insights really add value to the lessons. Great patience with beginners!',
      date: '2025-01-18',
      helpful: 8
    }
  ];

  const trendingSkills = [
    { skill: 'AI/Machine Learning', growth: '+45%', exchanges: 234 },
    { skill: 'Web Development', growth: '+32%', exchanges: 189 },
    { skill: 'Digital Marketing', growth: '+28%', exchanges: 156 },
    { skill: 'Data Science', growth: '+25%', exchanges: 142 },
    { skill: 'UI/UX Design', growth: '+22%', exchanges: 128 }
  ];

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const filteredMembers = communityMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         member.wantToLearn.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => member.tags.includes(tag));
    
    const matchesLocation = !filters.location || 
                           member.location.toLowerCase().includes(filters.location.toLowerCase());
    
    const matchesRating = !filters.rating || 
                         member.rating >= parseFloat(filters.rating);
    
    const matchesExperience = !filters.experience || 
                             member.experience === filters.experience;
    
    const matchesAvailability = !filters.availability || 
                               member.availability === filters.availability;

    return matchesSearch && matchesTags && matchesLocation && matchesRating && 
           matchesExperience && matchesAvailability;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Community</h1>
              <p className="text-gray-600 mt-1">Connect with learners and teachers from around the world.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full hover:shadow-lg transition-all duration-200">
                Join Discussion
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">10,247</h3>
              <p className="text-sm text-gray-600">Active Members</p>
              <p className="text-xs text-green-600 mt-1">+12% this month</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">850+</h3>
              <p className="text-sm text-gray-600">Skills Available</p>
              <p className="text-xs text-green-600 mt-1">+8% this month</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">25,486</h3>
              <p className="text-sm text-gray-600">Exchanges Made</p>
              <p className="text-xs text-green-600 mt-1">+15% this month</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">4.8</span>
              </div>
              <h3 className="font-semibold text-gray-900">Avg. Rating</h3>
              <p className="text-sm text-gray-600">Community satisfaction</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-2xl shadow-sm mb-8">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
                    {[
                      { key: 'discover', label: 'Discover People' },
                      { key: 'reviews', label: 'Recent Reviews' }
                    ].map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                          activeTab === tab.key
                            ? 'bg-white text-primary-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Search and Filter */}
                <div className="p-6 border-b border-gray-200 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search people, skills, or locations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <button 
                      onClick={() => setShowTagFilter(!showTagFilter)}
                      className="p-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2"
                    >
                      <Tag className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-600">Tags</span>
                      <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showTagFilter ? 'rotate-180' : ''}`} />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                      <Filter className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Tag Filter */}
                  {showTagFilter && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Filter by Tags</h4>
                        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                          {availableTags.map((tag) => (
                            <button
                              key={tag}
                              onClick={() => addTag(tag)}
                              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                                selectedTags.includes(tag)
                                  ? 'bg-primary-100 text-primary-800 border border-primary-300'
                                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {selectedTags.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Tags</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedTags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm flex items-center space-x-1"
                              >
                                <span>{tag}</span>
                                <button
                                  onClick={() => removeTag(tag)}
                                  className="text-primary-600 hover:text-primary-800"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </span>
                            ))}
                            <button
                              onClick={() => setSelectedTags([])}
                              className="px-3 py-1 text-gray-500 hover:text-gray-700 text-sm"
                            >
                              Clear all
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Advanced Filters */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <select
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      <option value="">All Locations</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Spain">Spain</option>
                      <option value="Korea">Korea</option>
                    </select>

                    <select
                      value={filters.rating}
                      onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      <option value="">Any Rating</option>
                      <option value="4.5">4.5+ Stars</option>
                      <option value="4.0">4.0+ Stars</option>
                      <option value="3.5">3.5+ Stars</option>
                    </select>

                    <select
                      value={filters.experience}
                      onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      <option value="">Any Experience</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>

                    <select
                      value={filters.availability}
                      onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      <option value="">Any Time</option>
                      <option value="Mornings">Mornings</option>
                      <option value="Evenings">Evenings</option>
                      <option value="Weekends">Weekends</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {activeTab === 'discover' && (
                    <div className="space-y-6">
                      {filteredMembers.map((member) => (
                        <div key={member.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-200">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="relative">
                                <img 
                                  src={member.avatar} 
                                  alt={member.name}
                                  className="w-16 h-16 rounded-full object-cover"
                                />
                                {member.online && (
                                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                                )}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span className="text-sm text-gray-600">{member.rating}</span>
                                  <span className="text-gray-400">•</span>
                                  <MapPin className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-600">{member.location}</span>
                                  <span className="text-gray-400">•</span>
                                  <span className="text-sm text-gray-600">{member.experience}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <div className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                                {member.matchScore}% match
                              </div>
                              <button className="p-2 text-gray-400 hover:text-primary-600 rounded-lg hover:bg-primary-50">
                                <MessageCircle className="w-5 h-5" />
                              </button>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {member.tags.slice(0, 6).map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                  {tag}
                                </span>
                              ))}
                              {member.tags.length > 6 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                  +{member.tags.length - 6} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Can Teach</h4>
                              <div className="flex flex-wrap gap-2">
                                {member.skills.map((skill, index) => (
                                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Wants to Learn</h4>
                              <div className="flex flex-wrap gap-2">
                                {member.wantToLearn.map((skill, index) => (
                                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Award className="w-4 h-4 mr-1" />
                                {member.exchanges} exchanges
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {member.availability}
                              </span>
                            </div>
                            <Link 
                              to={`/connection/${member.id}`}
                              className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors font-medium"
                            >
                              Connect
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border border-gray-200 rounded-2xl p-6">
                          <div className="flex items-start space-x-4 mb-4">
                            <img 
                              src={review.reviewer.avatar} 
                              alt={review.reviewer.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h3 className="font-semibold text-gray-900">{review.reviewer.name}</h3>
                                  <p className="text-sm text-gray-600">
                                    reviewed <span className="font-medium">{review.reviewee.name}</span> for {review.skill}
                                  </p>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700 mb-3">{review.comment}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                                <div className="flex items-center space-x-4">
                                  <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary-600">
                                    <Heart className="w-4 h-4" />
                                    <span>{review.helpful}</span>
                                  </button>
                                  <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary-600">
                                    <Share2 className="w-4 h-4" />
                                    <span>Share</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Skills */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Trending Skills</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {trendingSkills.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.skill}</h3>
                          <p className="text-sm text-gray-600">{item.exchanges} exchanges</p>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {item.growth}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-6 text-white">
                <h2 className="text-xl font-bold mb-4">Share Your Skills</h2>
                <p className="text-primary-100 mb-6">
                  Help others learn by sharing what you know. Join our community of passionate learners and teachers.
                </p>
                <button className="w-full bg-white text-primary-600 font-semibold py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-200">
                  Create Skill Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;