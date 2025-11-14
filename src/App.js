import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign, Package, Eye, ArrowUp, ArrowDown, Download, Filter, Moon, Sun } from 'lucide-react';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [darkMode, setDarkMode] = useState(false);
  
  const salesData = [
    { name: 'السبت', sales: 4000, orders: 240, revenue: 2400 },
    { name: 'الأحد', sales: 3000, orders: 139, revenue: 2210 },
    { name: 'الاثنين', sales: 2000, orders: 980, revenue: 2290 },
    { name: 'الثلاثاء', sales: 2780, orders: 390, revenue: 2000 },
    { name: 'الأربعاء', sales: 1890, orders: 480, revenue: 2181 },
    { name: 'الخميس', sales: 2390, orders: 380, revenue: 2500 },
    { name: 'الجمعة', sales: 3490, orders: 430, revenue: 2100 },
  ];

  const categoryData = [
    { name: 'إلكترونيات', value: 400, color: '#3b82f6' },
    { name: 'ملابس', value: 300, color: '#8b5cf6' },
    { name: 'طعام', value: 200, color: '#ec4899' },
    { name: 'كتب', value: 100, color: '#f59e0b' },
  ];

  const topProducts = [
    { id: 1, name: 'iPhone 15 Pro', sales: 1234, revenue: 45000, trend: 'up', change: 12, icon: '📱' },
    { id: 2, name: 'Samsung Galaxy S24', sales: 987, revenue: 38000, trend: 'up', change: 8, icon: '📱' },
    { id: 3, name: 'MacBook Air M3', sales: 654, revenue: 52000, trend: 'down', change: -3, icon: '💻' },
    { id: 4, name: 'AirPods Pro', sales: 543, revenue: 15000, trend: 'up', change: 15, icon: '🎧' },
    { id: 5, name: 'iPad Air', sales: 432, revenue: 28000, trend: 'up', change: 5, icon: '📱' },
  ];

  const stats = [
    { 
      title: 'إجمالي المبيعات', 
      value: '234,567 جنيه', 
      change: '+12.5%', 
      trend: 'up',
      icon: DollarSign,
      color: 'bg-blue-500'
    },
    { 
      title: 'عدد الطلبات', 
      value: '1,234', 
      change: '+8.2%', 
      trend: 'up',
      icon: ShoppingCart,
      color: 'bg-purple-500'
    },
    { 
      title: 'العملاء الجدد', 
      value: '456', 
      change: '+23.1%', 
      trend: 'up',
      icon: Users,
      color: 'bg-pink-500'
    },
    { 
      title: 'المنتجات', 
      value: '789', 
      change: '-2.4%', 
      trend: 'down',
      icon: Package,
      color: 'bg-orange-500'
    },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'أحمد محمد', amount: 1500, status: 'مكتمل', date: '2025-01-10', avatar: '👨‍💼' },
    { id: '#ORD-002', customer: 'فاطمة علي', amount: 2300, status: 'قيد التنفيذ', date: '2025-01-10', avatar: '👩‍💼' },
    { id: '#ORD-003', customer: 'محمود سعيد', amount: 890, status: 'مكتمل', date: '2025-01-09', avatar: '🧑‍💼' },
    { id: '#ORD-004', customer: 'نور الدين', amount: 3400, status: 'ملغي', date: '2025-01-09', avatar: '👨‍💻' },
    { id: '#ORD-005', customer: 'سارة حسن', amount: 1200, status: 'مكتمل', date: '2025-01-08', avatar: '👩‍💻' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'مكتمل': return 'bg-green-100 text-green-800';
      case 'قيد التنفيذ': return 'bg-blue-100 text-blue-800';
      case 'ملغي': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const textPrimary = darkMode ? 'text-gray-100' : 'text-gray-800';
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';
  const hoverBg = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

  return (
    <div className={`min-h-screen ${bgClass} p-6 transition-colors duration-300`} dir="rtl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${textPrimary} mb-2`}>لوحة التحكم</h1>
          <p className={textSecondary}>مرحباً بك، إليك ملخص نشاط اليوم</p>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full ${cardBg} shadow-sm ${hoverBg} transition-all`}
        >
          {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className={textSecondary} />}
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setTimeRange('day')}
          className={`px-4 py-2 rounded-lg transition ${timeRange === 'day' ? 'bg-blue-500 text-white' : `${cardBg} ${textSecondary} ${hoverBg}`}`}
        >
          اليوم
        </button>
        <button 
          onClick={() => setTimeRange('week')}
          className={`px-4 py-2 rounded-lg transition ${timeRange === 'week' ? 'bg-blue-500 text-white' : `${cardBg} ${textSecondary} ${hoverBg}`}`}
        >
          الأسبوع
        </button>
        <button 
          onClick={() => setTimeRange('month')}
          className={`px-4 py-2 rounded-lg transition ${timeRange === 'month' ? 'bg-blue-500 text-white' : `${cardBg} ${textSecondary} ${hoverBg}`}`}
        >
          الشهر
        </button>
        <button className={`mr-auto px-4 py-2 ${cardBg} ${textSecondary} rounded-lg ${hoverBg} flex items-center gap-2 transition`}>
          <Download size={18} />
          تصدير التقرير
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className={`${cardBg} rounded-xl shadow-sm p-6 ${hoverBg} transition-all duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                {stat.change}
              </div>
            </div>
            <p className={`${textSecondary} text-sm mb-1`}>{stat.title}</p>
            <p className={`text-2xl font-bold ${textPrimary}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sales Chart */}
        <div className={`lg:col-span-2 ${cardBg} rounded-xl shadow-sm p-6 transition-colors duration-300`}>
          <h3 className={`text-lg font-bold ${textPrimary} mb-4`}>المبيعات والإيرادات</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="name" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                  border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: darkMode ? '#f3f4f6' : '#1f2937'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} name="المبيعات" />
              <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} name="الإيرادات" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Pie Chart */}
        <div className={`${cardBg} rounded-xl shadow-sm p-6 transition-colors duration-300`}>
          <h3 className={`text-lg font-bold ${textPrimary} mb-4`}>المبيعات حسب الفئة</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                  border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: darkMode ? '#f3f4f6' : '#1f2937'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className={`${cardBg} rounded-xl shadow-sm p-6 transition-colors duration-300`}>
          <h3 className={`text-lg font-bold ${textPrimary} mb-4`}>المنتجات الأكثر مبيعاً</h3>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className={`flex items-center justify-between p-3 ${hoverBg} rounded-lg transition`}>
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-4xl">{product.icon}</div>
                  <div>
                    <p className={`font-semibold ${textPrimary}`}>{product.name}</p>
                    <p className={`text-sm ${textSecondary}`}>{product.sales} مبيعة • {product.revenue} جنيه</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1 text-sm ${product.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {product.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {Math.abs(product.change)}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className={`${cardBg} rounded-xl shadow-sm p-6 transition-colors duration-300`}>
          <h3 className={`text-lg font-bold ${textPrimary} mb-4`}>آخر الطلبات</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${borderColor}`}>
                  <th className={`text-right py-3 text-sm font-semibold ${textSecondary}`}>رقم الطلب</th>
                  <th className={`text-right py-3 text-sm font-semibold ${textSecondary}`}>العميل</th>
                  <th className={`text-right py-3 text-sm font-semibold ${textSecondary}`}>المبلغ</th>
                  <th className={`text-right py-3 text-sm font-semibold ${textSecondary}`}>الحالة</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className={`border-b ${borderColor} ${hoverBg} transition`}>
                    <td className={`py-3 text-sm font-medium ${textPrimary}`}>{order.id}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">{order.avatar}</div>
                        <span className={`text-sm ${textSecondary}`}>{order.customer}</span>
                      </div>
                    </td>
                    <td className={`py-3 text-sm ${textPrimary} font-semibold`}>{order.amount} جنيه</td>
                    <td className="py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;