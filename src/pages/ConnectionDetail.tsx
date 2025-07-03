import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { 
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Clock,
  Video,
  MessageCircle,
  Phone,
  Plus,
  Play,
  Pause,
  Download,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Users,
  BookOpen,
  BarChart3,
  Settings,
  Send,
  Paperclip,
  Smile,
  MoreVertical
} from 'lucide-react';

const ConnectionDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [requestStatus, setRequestStatus] = useState('pending'); // pending, accepted, rejected
  const [showCreateModule, setShowCreateModule] = useState(false);
  const [message, setMessage] = useState('');
  const [newModule, setNewModule] = useState({
    title: '',
    description: '',
    duration: '',
    difficulty: 'beginner'
  });

  // Dynamic connection data based on ID
  const connectionData = {
    1: {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      location: 'New York, USA',
      skills: ['Machine Learning', 'Python', 'Data Science'],
      wantToLearn: ['React', 'Web Development', 'UI/UX'],
      bio: 'Passionate data scientist with 5+ years of experience in machine learning and AI. Love teaching and helping others grow in tech.',
      experience: 'Expert',
      availability: 'Weekends and evenings',
      languages: ['English (Native)', 'Mandarin (Fluent)'],
      timezone: 'EST (UTC-5)',
      responseTime: '2 hours',
      completionRate: '98%',
      totalExchanges: 24,
      totalHours: 156
    },
    2: {
      id: 2,
      name: 'Mike Rodriguez',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      location: 'Madrid, Spain',
      skills: ['Spanish', 'Guitar', 'Photography'],
      wantToLearn: ['Web Development', 'Digital Marketing'],
      bio: 'Native Spanish speaker and professional photographer with 8+ years of experience. I love sharing my culture and language with others while learning new tech skills.',
      experience: 'Intermediate',
      availability: 'Evenings and weekends',
      languages: ['Spanish (Native)', 'English (Fluent)', 'French (Basic)'],
      timezone: 'CET (UTC+1)',
      responseTime: '4 hours',
      completionRate: '95%',
      totalExchanges: 18,
      totalHours: 89
    },
    3: {
      id: 3,
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      location: 'London, UK',
      skills: ['Digital Marketing', 'Content Writing', 'SEO'],
      wantToLearn: ['Python', 'Data Analysis'],
      bio: 'Digital marketing expert with 6+ years helping businesses grow online. Passionate about data-driven marketing and always eager to learn new analytical skills.',
      experience: 'Expert',
      availability: 'Flexible schedule',
      languages: ['English (Native)', 'German (Intermediate)'],
      timezone: 'GMT (UTC+0)',
      responseTime: '1 hour',
      completionRate: '99%',
      totalExchanges: 32,
      totalHours: 198
    },
    4: {
      id: 4,
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      location: 'Seoul, Korea',
      skills: ['Korean', 'Graphic Design', 'Illustration'],
      wantToLearn: ['UI/UX Design', 'Figma'],
      bio: 'Creative graphic designer and Korean language tutor. I enjoy helping people learn Korean culture and language while improving my design skills.',
      experience: 'Intermediate',
      availability: 'Mornings and evenings',
      languages: ['Korean (Native)', 'English (Fluent)', 'Japanese (Basic)'],
      timezone: 'KST (UTC+9)',
      responseTime: '3 hours',
      completionRate: '92%',
      totalExchanges: 15,
      totalHours: 67
    }
  };

  // Get connection data based on ID, fallback to first user if ID not found
  const connection = connectionData[parseInt(id || '1')] || connectionData[1];

  // Dynamic modules based on connection
  const getModulesForConnection = (connectionId: number) => {
    const baseModules = {
      1: [ // Sarah Chen - ML/Data Science
        {
          id: 1,
          title: 'Introduction to Machine Learning',
          description: 'Basic concepts and fundamentals of ML',
          duration: '2 hours',
          difficulty: 'beginner',
          status: 'completed',
          progress: 100,
          createdBy: 'Sarah Chen',
          sessions: [
            { id: 1, title: 'What is Machine Learning?', duration: '30 min', completed: true, recorded: true },
            { id: 2, title: 'Types of ML Algorithms', duration: '45 min', completed: true, recorded: true },
            { id: 3, title: 'Hands-on Practice', duration: '45 min', completed: true, recorded: false }
          ]
        },
        {
          id: 2,
          title: 'Python for Data Science',
          description: 'Learn Python libraries for data analysis',
          duration: '3 hours',
          difficulty: 'intermediate',
          status: 'in-progress',
          progress: 60,
          createdBy: 'Sarah Chen',
          sessions: [
            { id: 1, title: 'NumPy Basics', duration: '45 min', completed: true, recorded: true },
            { id: 2, title: 'Pandas for Data Manipulation', duration: '60 min', completed: true, recorded: true },
            { id: 3, title: 'Data Visualization with Matplotlib', duration: '45 min', completed: false, recorded: false },
            { id: 4, title: 'Advanced Pandas Techniques', duration: '30 min', completed: false, recorded: false }
          ]
        }
      ],
      2: [ // Mike Rodriguez - Spanish/Photography
        {
          id: 1,
          title: 'Spanish Fundamentals',
          description: 'Learn basic Spanish grammar and vocabulary',
          duration: '4 hours',
          difficulty: 'beginner',
          status: 'in-progress',
          progress: 75,
          createdBy: 'Mike Rodriguez',
          sessions: [
            { id: 1, title: 'Basic Greetings and Introductions', duration: '60 min', completed: true, recorded: true },
            { id: 2, title: 'Essential Vocabulary', duration: '60 min', completed: true, recorded: true },
            { id: 3, title: 'Present Tense Verbs', duration: '60 min', completed: true, recorded: true },
            { id: 4, title: 'Conversational Practice', duration: '60 min', completed: false, recorded: false }
          ]
        },
        {
          id: 2,
          title: 'Photography Basics',
          description: 'Learn composition, lighting, and camera settings',
          duration: '3 hours',
          difficulty: 'beginner',
          status: 'planned',
          progress: 0,
          createdBy: 'Mike Rodriguez',
          sessions: [
            { id: 1, title: 'Camera Settings and Modes', duration: '45 min', completed: false, recorded: false },
            { id: 2, title: 'Composition Techniques', duration: '45 min', completed: false, recorded: false },
            { id: 3, title: 'Lighting Fundamentals', duration: '45 min', completed: false, recorded: false },
            { id: 4, title: 'Photo Editing Basics', duration: '45 min', completed: false, recorded: false }
          ]
        }
      ],
      3: [ // Emma Thompson - Digital Marketing
        {
          id: 1,
          title: 'Digital Marketing Fundamentals',
          description: 'Learn the basics of online marketing strategies',
          duration: '5 hours',
          difficulty: 'beginner',
          status: 'in-progress',
          progress: 40,
          createdBy: 'Emma Thompson',
          sessions: [
            { id: 1, title: 'Marketing Strategy Overview', duration: '60 min', completed: true, recorded: true },
            { id: 2, title: 'Social Media Marketing', duration: '75 min', completed: true, recorded: true },
            { id: 3, title: 'Email Marketing Campaigns', duration: '60 min', completed: false, recorded: false },
            { id: 4, title: 'Analytics and Measurement', duration: '75 min', completed: false, recorded: false },
            { id: 5, title: 'Campaign Optimization', duration: '60 min', completed: false, recorded: false }
          ]
        },
        {
          id: 2,
          title: 'SEO Mastery',
          description: 'Advanced search engine optimization techniques',
          duration: '4 hours',
          difficulty: 'intermediate',
          status: 'planned',
          progress: 0,
          createdBy: 'Emma Thompson',
          sessions: [
            { id: 1, title: 'Keyword Research', duration: '60 min', completed: false, recorded: false },
            { id: 2, title: 'On-Page Optimization', duration: '60 min', completed: false, recorded: false },
            { id: 3, title: 'Link Building Strategies', duration: '60 min', completed: false, recorded: false },
            { id: 4, title: 'Technical SEO', duration: '60 min', completed: false, recorded: false }
          ]
        }
      ],
      4: [ // David Kim - Korean/Design
        {
          id: 1,
          title: 'Korean Language Basics',
          description: 'Learn Hangul and basic Korean phrases',
          duration: '6 hours',
          difficulty: 'beginner',
          status: 'in-progress',
          progress: 50,
          createdBy: 'David Kim',
          sessions: [
            { id: 1, title: 'Hangul Alphabet', duration: '90 min', completed: true, recorded: true },
            { id: 2, title: 'Basic Pronunciation', duration: '60 min', completed: true, recorded: true },
            { id: 3, title: 'Common Phrases', duration: '90 min', completed: true, recorded: false },
            { id: 4, title: 'Numbers and Time', duration: '60 min', completed: false, recorded: false },
            { id: 5, title: 'Cultural Context', duration: '60 min', completed: false, recorded: false },
            { id: 6, title: 'Conversation Practice', duration: '60 min', completed: false, recorded: false }
          ]
        },
        {
          id: 2,
          title: 'Graphic Design Principles',
          description: 'Learn fundamental design concepts and tools',
          duration: '4 hours',
          difficulty: 'beginner',
          status: 'planned',
          progress: 0,
          createdBy: 'David Kim',
          sessions: [
            { id: 1, title: 'Design Principles', duration: '60 min', completed: false, recorded: false },
            { id: 2, title: 'Color Theory', duration: '60 min', completed: false, recorded: false },
            { id: 3, title: 'Typography Basics', duration: '60 min', completed: false, recorded: false },
            { id: 4, title: 'Layout and Composition', duration: '60 min', completed: false, recorded: false }
          ]
        }
      ]
    };

    return baseModules[connectionId] || baseModules[1];
  };

  const modules = getModulesForConnection(connection.id);

  // Dynamic messages based on connection
  const getMessagesForConnection = (connectionId: number) => {
    const messageData = {
      1: [
        {
          id: 1,
          sender: 'Sarah Chen',
          content: 'Hi! I saw your connection request. I\'d love to exchange skills with you!',
          timestamp: '2025-01-20 10:30 AM',
          isMe: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'That\'s great! I\'m really excited to learn machine learning from you.',
          timestamp: '2025-01-20 10:45 AM',
          isMe: true
        },
        {
          id: 3,
          sender: 'Sarah Chen',
          content: 'Perfect! I\'ve created a learning module for ML basics. When would you like to start?',
          timestamp: '2025-01-20 11:00 AM',
          isMe: false
        }
      ],
      2: [
        {
          id: 1,
          sender: 'Mike Rodriguez',
          content: '¡Hola! I\'m excited to help you learn Spanish while learning web development from you.',
          timestamp: '2025-01-20 09:15 AM',
          isMe: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'That sounds perfect! I\'ve always wanted to learn Spanish.',
          timestamp: '2025-01-20 09:30 AM',
          isMe: true
        },
        {
          id: 3,
          sender: 'Mike Rodriguez',
          content: 'Great! I can also teach you some photography techniques if you\'re interested.',
          timestamp: '2025-01-20 09:45 AM',
          isMe: false
        }
      ],
      3: [
        {
          id: 1,
          sender: 'Emma Thompson',
          content: 'Hello! I\'m thrilled about our skill exchange. Digital marketing for Python sounds like a great trade!',
          timestamp: '2025-01-20 08:00 AM',
          isMe: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'Absolutely! I\'ve been wanting to learn more about SEO and content marketing.',
          timestamp: '2025-01-20 08:15 AM',
          isMe: true
        },
        {
          id: 3,
          sender: 'Emma Thompson',
          content: 'Perfect! I\'ve prepared some real-world case studies we can work through together.',
          timestamp: '2025-01-20 08:30 AM',
          isMe: false
        }
      ],
      4: [
        {
          id: 1,
          sender: 'David Kim',
          content: '안녕하세요! (Hello!) I\'m looking forward to our skill exchange.',
          timestamp: '2025-01-20 07:00 AM',
          isMe: false
        },
        {
          id: 2,
          sender: 'You',
          content: 'Hi David! I\'m excited to learn Korean and see your design work.',
          timestamp: '2025-01-20 07:15 AM',
          isMe: true
        },
        {
          id: 3,
          sender: 'David Kim',
          content: 'Great! I can teach you Korean culture along with the language. And I\'d love to learn UI/UX from you!',
          timestamp: '2025-01-20 07:30 AM',
          isMe: false
        }
      ]
    };

    return messageData[connectionId] || messageData[1];
  };

  const messages = getMessagesForConnection(connection.id);

  // Dynamic upcoming sessions based on connection
  const getUpcomingSessionsForConnection = (connectionId: number) => {
    const sessionData = {
      1: [
        {
          id: 1,
          title: 'Data Visualization with Matplotlib',
          date: 'Today',
          time: '3:00 PM - 3:45 PM',
          type: 'learning',
          module: 'Python for Data Science'
        },
        {
          id: 2,
          title: 'React Components Deep Dive',
          date: 'Tomorrow',
          time: '10:00 AM - 11:00 AM',
          type: 'teaching',
          module: 'React Fundamentals'
        }
      ],
      2: [
        {
          id: 1,
          title: 'Conversational Spanish Practice',
          date: 'Today',
          time: '7:00 PM - 8:00 PM',
          type: 'learning',
          module: 'Spanish Fundamentals'
        },
        {
          id: 2,
          title: 'JavaScript Basics',
          date: 'Wednesday',
          time: '6:00 PM - 7:00 PM',
          type: 'teaching',
          module: 'Web Development Fundamentals'
        }
      ],
      3: [
        {
          id: 1,
          title: 'Email Marketing Campaigns',
          date: 'Tomorrow',
          time: '2:00 PM - 3:15 PM',
          type: 'learning',
          module: 'Digital Marketing Fundamentals'
        },
        {
          id: 2,
          title: 'Python Data Structures',
          date: 'Thursday',
          time: '11:00 AM - 12:00 PM',
          type: 'teaching',
          module: 'Python Programming'
        }
      ],
      4: [
        {
          id: 1,
          title: 'Korean Numbers and Time',
          date: 'Today',
          time: '9:00 AM - 10:00 AM',
          type: 'learning',
          module: 'Korean Language Basics'
        },
        {
          id: 2,
          title: 'Figma Interface Design',
          date: 'Friday',
          time: '4:00 PM - 5:00 PM',
          type: 'teaching',
          module: 'UI/UX Design Basics'
        }
      ]
    };

    return sessionData[connectionId] || sessionData[1];
  };

  const upcomingSessions = getUpcomingSessionsForConnection(connection.id);

  const handleCreateModule = () => {
    // Logic to create new module
    console.log('Creating module:', newModule);
    setShowCreateModule(false);
    setNewModule({ title: '', description: '', duration: '', difficulty: 'beginner' });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Logic to send message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <AlertCircle className="w-5 h-5" />;
      case 'accepted': return <CheckCircle className="w-5 h-5" />;
      case 'rejected': return <XCircle className="w-5 h-5" />;
      default: return <AlertCircle className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/community" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div className="flex items-center space-x-4">
                <img 
                  src={connection.avatar} 
                  alt={connection.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{connection.name}</h1>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{connection.rating}</span>
                    <span>•</span>
                    <MapPin className="w-4 h-4" />
                    <span>{connection.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 ${getStatusColor(requestStatus)}`}>
                {getStatusIcon(requestStatus)}
                <span className="capitalize">{requestStatus}</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Request Status Banner */}
          {requestStatus === 'pending' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                  <div>
                    <h3 className="font-semibold text-yellow-900">Connection Request Pending</h3>
                    <p className="text-yellow-700">Waiting for {connection.name} to accept your skill exchange request.</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setRequestStatus('accepted')}
                    className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                  >
                    Simulate Accept
                  </button>
                  <button 
                    onClick={() => setRequestStatus('rejected')}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel Request
                  </button>
                </div>
              </div>
            </div>
          )}

          {requestStatus === 'accepted' && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-900">Connection Accepted! 🎉</h3>
                  <p className="text-green-700">{connection.name} has accepted your skill exchange request. You can now start learning together!</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="bg-white rounded-2xl shadow-sm mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
                {[
                  { key: 'overview', label: 'Overview', icon: Users },
                  { key: 'modules', label: 'Learning Modules', icon: BookOpen },
                  { key: 'sessions', label: 'Sessions', icon: Calendar },
                  { key: 'messages', label: 'Messages', icon: MessageCircle },
                  { key: 'progress', label: 'Progress', icon: BarChart3 }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      activeTab === tab.key
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    {/* Profile Info */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">About {connection.name}</h3>
                      <p className="text-gray-700 mb-4">{connection.bio}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Can Teach</h4>
                          <div className="flex flex-wrap gap-2">
                            {connection.skills.map((skill, index) => (
                              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Wants to Learn</h4>
                          <div className="flex flex-wrap gap-2">
                            {connection.wantToLearn.map((skill, index) => (
                              <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Upcoming Sessions */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Sessions</h3>
                      <div className="space-y-3">
                        {upcomingSessions.map((session) => (
                          <div key={session.id} className="p-4 border border-gray-200 rounded-xl">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{session.title}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                session.type === 'learning' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                              }`}>
                                {session.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Module: {session.module}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">{session.date} • {session.time}</span>
                              <button className="px-3 py-1 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors">
                                Join Session
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Quick Stats */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-4">Quick Stats</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Experience</span>
                          <span className="font-medium text-gray-900">{connection.experience}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Response Time</span>
                          <span className="font-medium text-gray-900">{connection.responseTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Completion Rate</span>
                          <span className="font-medium text-gray-900">{connection.completionRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Exchanges</span>
                          <span className="font-medium text-gray-900">{connection.totalExchanges}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Hours Taught</span>
                          <span className="font-medium text-gray-900">{connection.totalHours}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-4">Contact Info</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-600 block">Availability</span>
                          <span className="font-medium text-gray-900">{connection.availability}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block">Timezone</span>
                          <span className="font-medium text-gray-900">{connection.timezone}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block">Languages</span>
                          <div className="space-y-1">
                            {connection.languages.map((lang, index) => (
                              <span key={index} className="block font-medium text-gray-900">{lang}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'modules' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Learning Modules</h3>
                    <button 
                      onClick={() => setShowCreateModule(true)}
                      className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors flex items-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create Module</span>
                    </button>
                  </div>

                  <div className="grid gap-6">
                    {modules.map((module) => (
                      <div key={module.id} className="border border-gray-200 rounded-2xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h4>
                            <p className="text-gray-600 mb-3">{module.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {module.duration}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                                {module.difficulty}
                              </span>
                              <span>Created by {module.createdBy}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{module.progress}%</div>
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${module.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {module.sessions.map((session) => (
                            <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                              <div className="flex items-center space-x-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  session.completed ? 'bg-green-500' : 'bg-gray-300'
                                }`}>
                                  {session.completed && <CheckCircle className="w-4 h-4 text-white" />}
                                </div>
                                <div>
                                  <h5 className="font-medium text-gray-900">{session.title}</h5>
                                  <span className="text-sm text-gray-600">{session.duration}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                {session.recorded && (
                                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-200">
                                    <Download className="w-4 h-4" />
                                  </button>
                                )}
                                <button className="p-2 text-primary-600 hover:text-primary-700 rounded-lg hover:bg-primary-50">
                                  {session.completed ? <Play className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="border border-gray-200 rounded-2xl h-96 flex flex-col">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-bold text-gray-900">Messages with {connection.name}</h3>
                      </div>
                      
                      <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg) => (
                          <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                              msg.isMe 
                                ? 'bg-primary-600 text-white' 
                                : 'bg-gray-100 text-gray-900'
                            }`}>
                              <p className="text-sm">{msg.content}</p>
                              <p className={`text-xs mt-1 ${msg.isMe ? 'text-primary-100' : 'text-gray-500'}`}>
                                {msg.timestamp}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                            <Paperclip className="w-5 h-5" />
                          </button>
                          <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          />
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                            <Smile className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={handleSendMessage}
                            className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                          >
                            <Send className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <button className="w-full flex items-center space-x-3 p-3 bg-white rounded-xl hover:bg-gray-100 transition-colors">
                          <Video className="w-5 h-5 text-primary-600" />
                          <span className="font-medium text-gray-900">Start Video Call</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 p-3 bg-white rounded-xl hover:bg-gray-100 transition-colors">
                          <Calendar className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-gray-900">Schedule Session</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 p-3 bg-white rounded-xl hover:bg-gray-100 transition-colors">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <span className="font-medium text-gray-900">Share Files</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Create Module Modal */}
        {showCreateModule && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Create Learning Module</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Module Title</label>
                  <input
                    type="text"
                    value={newModule.title}
                    onChange={(e) => setNewModule({ ...newModule, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder="e.g., Advanced React Patterns"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newModule.description}
                    onChange={(e) => setNewModule({ ...newModule, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none h-20 resize-none"
                    placeholder="Brief description of what this module covers..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <input
                      type="text"
                      value={newModule.duration}
                      onChange={(e) => setNewModule({ ...newModule, duration: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      placeholder="e.g., 3 hours"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                    <select
                      value={newModule.difficulty}
                      onChange={(e) => setNewModule({ ...newModule, difficulty: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowCreateModule(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateModule}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Create Module
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectionDetail;