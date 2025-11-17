import React from 'react';
import { LucideIcon } from 'lucide-react';
import './StatCard.css';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  trend,
  color = 'primary' 
}) => {
  return (
    <div className={`stat-card stat-card-${color}`}>
      <div className="stat-card-header">
        <div className="stat-card-title">{title}</div>
        <div className={`stat-card-icon stat-icon-${color}`}>
          <Icon size={24} />
        </div>
      </div>
      
      <div className="stat-card-value">{value}</div>
      
      {trend && (
        <div className={`stat-card-trend ${trend.isPositive ? 'positive' : 'negative'}`}>
          {trend.isPositive ? '+' : ''}{trend.value}% from last week
        </div>
      )}
    </div>
  );
};

export default StatCard;
